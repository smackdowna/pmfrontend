import { ICONS } from "../../assets";
import { useState } from "react";

// Define the type for the header props
interface Header {
  key: string;
  label: string;
  sortable?: boolean;
}

interface RowData {
  [key: string]: string | number; // Each row can have multiple fields (key-value pairs), and values can be strings or numbers.
}

// Table component with typed props
interface TableProps {
  headers: Header[];
  data: RowData[];
  showHeader: boolean;
}

const Table = ({ headers = [], data = [], showHeader = true }: TableProps) => {
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSortedAsc, setIsSortedAsc] = useState<boolean>(true);
  const [displayData, setDisplayData] = useState<RowData[]>(data);

  const totalPages = Math.ceil(displayData.length / rowsPerPage);

  const currentData = displayData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle pagination
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Handle export as CSV
  const handleExport = () => {
    const csvHeaders = headers.map((header) => header.label).join(",") + "\n";
    const csvRows = displayData.map((row) =>
      headers.map((header) => row[header.key] || "").join(",")
    );
    const csvContent = csvHeaders + csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "TransactionHistory.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle sorting by any sortable column
  const handleSort = (key: string) => {
    const sortedData = [...data].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (isSortedAsc) {
        return valueA < valueB ? -1 : 1;
      }
      return valueA > valueB ? -1 : 1;
    });
    setDisplayData(sortedData);
    setIsSortedAsc(!isSortedAsc);
    setCurrentPage(1);
  };

  // Conditional class for kycStatus column
  const getKycStatusColor = (status: string | number) => {
    if (status === "Pending" || status === "Overdue") {
      return "bg-red-100  text-red-700 px-2 py-1 rounded";
    }
    if (status === "Approved" || status === "Active" || status === "Paid") {
      return "bg-green-100 text-green-700 px-2 rounded";
    }
    return "";
  };

  return (
    <div className="overflow-x-auto">
      <div className="bg-white rounded-xl flex flex-col border border-neutral-55">
        {showHeader && (
          <div className="flex p-[10px] justify-between items-center">
            <div className="border flex gap-2 border-neutral-55 rounded-xl p-2 max-w-[190px]">
              <img src={ICONS.search} alt="Search Icon" />
              <input
                name="search"
                placeholder="Search"
                className="max-w-[140px]"
              />
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div className="flex justify-between items-center p-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-1 py-2 rounded ${
                    currentPage === 1
                      ? "text-neutral-10 cursor-not-allowed"
                      : "text-neutral-30"
                  }`}
                >
                  <img src={ICONS.AltArrowLeft} alt="Previous Page" />
                </button>
                <span className="text-neutral-10">
                  {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-1 py-2 rounded ${
                    currentPage === totalPages
                      ? "text-neutral-15 cursor-not-allowed"
                      : "text-neutral-30"
                  }`}
                >
                  <img src={ICONS.AltArrowRight} alt="Next Page" />
                </button>
              </div>
              <div className="flex bg-neutral-60 p-2 rounded-lg">
                <button onClick={handleExport}>Export</button>
              </div>
              <div className="flex bg-neutral-60 p-2 rounded-lg">
                <button onClick={() => handleSort("date")}>
                  <img src={ICONS.SortVertical} alt="Sort Icon" />
                </button>
              </div>
              <div className="flex bg-neutral-60 p-2 rounded-lg">
                <img src={ICONS.Filter} alt="Filter Icon" />
              </div>
            </div>
          </div>
        )}
        <table className="table-auto w-full rounded-b-xl border-none text-left">
          <thead>
            <tr className="bg-neutral-60">
              {headers.map((header) => (
                <th
                  key={header.key}
                  className="px-4 py-2 font-Inter cursor-pointer"
                  onClick={
                    header.sortable ? () => handleSort(header.key) : undefined
                  }
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td
                    key={header.key}
                    className="px-4 py-2 font-Inter border-b"
                  >
                    <span
                      className={`${
                        header.key == "kycStatus" ||
                        header.key == "status" ||
                        header.key === "payoutStatus" ||
                        header.key === "paymentStatus"
                          ? getKycStatusColor(row[header.key])
                          : ""
                      }
                      `}
                    >
                      {header.key === "action" ? (
                        <button className="mx-auto">
                          <img
                            src={ICONS.menuDots}
                            className="w-5 h-5"
                            alt=""
                          />
                        </button>
                      ) : (
                        row[header.key]
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// TransactionHistory component to encapsulate Table
interface TransactionHistoryProps {
  data: RowData[];
  headers: Header[];
  showHeader: boolean;
}

const TransactionHistory = ({
  data = [],
  headers = [],
  showHeader = true,
}: TransactionHistoryProps) => {
  return <Table data={data} headers={headers} showHeader={showHeader} />;
};

export default TransactionHistory;
