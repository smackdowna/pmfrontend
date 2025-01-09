import { ICONS } from "../../assets";
import { useState } from "react";

const TransactionHistory = ({ data = [], showHeader = true }) => {
  // Use default data if none is passed
  const defaultData = [
    {
      id: 1,
      date: "23 Oct 2023",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "22 Oct 2024",
      customer: "Jane Doe",
      course: "Adobe Photoshop",
      amount: "₹600",
    },
    {
      id: 3,
      date: "21 Oct 2024",
      customer: "Mark Spencer",
      course: "Adobe Illustrator",
      amount: "₹400",
    },
    {
      id: 4,
      date: "22 Oct 2024",
      customer: "Jane Doe",
      course: "Adobe Photoshop",
      amount: "₹600",
    },
    {
      id: 5,
      date: "25 Oct 2024",
      customer: "Mark Spencer",
      course: "Adobe Illustrator",
      amount: "₹400",
    },
    {
      id: 6,
      date: "20 Oct 2024",
      customer: "Jane Doe",
      course: "Adobe Photoshop",
      amount: "₹600",
    },
    {
      id: 7,
      date: "21 Oct 2024",
      customer: "Mark Spencer",
      course: "Adobe Illustrator",
      amount: "₹400",
    },
    {
      id: 8,
      date: "20 Oct 2024",
      customer: "Jane Doe",
      course: "Adobe Photoshop",
      amount: "₹600",
    },
    {
      id: 9,
      date: "21 Oct 2024",
      customer: "Mark Spencer",
      course: "Adobe Illustrator",
      amount: "₹400",
    },
    {
      id: 10,
      date: "20 Oct 2024",
      customer: "Jane Doe",
      course: "Adobe Photoshop",
      amount: "₹600",
    },
    {
      id: 11,
      date: "21 Oct 2024",
      customer: "Mark Spencer",
      course: "Adobe Illustrator",
      amount: "₹400",
    },
    {
      id: 12,
      date: "27 Oct 2024",
      customer: "Mark Spencer",
      course: "Adobe Illustrator",
      amount: "₹400",
    },
    {
      id: 13,
      date: "30 Sept 2024",
      customer: "Mark Spencer",
      course: "Adobe Illustrator",
      amount: "₹400",
    },
    {
      id: 14,
      date: "21 Oct 2024",
      customer: "Mark Spencer",
      course: "Adobe Illustrator",
      amount: "₹400",
    },
  ];

  const [dataState] = useState(data.length > 0 ? data : defaultData);
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [displayData, setDisplayData] = useState(dataState);

  const totalPages = Math.ceil(displayData.length / rowsPerPage);

  const currentData = displayData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Export
  const handleExport = () => {
    const csvHeaders =
      "SR.NO,DATE OF PURCHASE,CUSTOMER NAME,COURSE,AMOUNT EARNED\n";
    const csvRows = displayData.map(
      (row, index) =>
        `${index + 1},${row.date},${row.customer},${row.course},${row.amount}`
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

  // Sort
  const handleSortByDate = () => {
    const sortedData = [...dataState].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return isSortedAsc ? dateA - dateB : dateB - dateA;
    });
    setDisplayData(sortedData);
    setIsSortedAsc(!isSortedAsc);
    setCurrentPage(1);
  };

  return (
    <div className="">
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
                        : " text-neutral-30"
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
                        : "text-neutral-30 "
                    }`}
                  >
                    <img src={ICONS.AltArrowRight} alt="Next Page" />
                  </button>
                </div>
                <div className="flex bg-neutral-60 p-2 rounded-lg">
                  <button onClick={handleExport}>Export</button>
                </div>
                <div className="flex bg-neutral-60 p-2 rounded-lg">
                  <button onClick={handleSortByDate}>
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
                <th className="px-4 py-2 font-Inter">SR.NO</th>
                <th className="px-4 py-2 font-Inter">DATE OF PURCHASE</th>
                <th className="px-4 py-2 font-Inter">CUSTOMER NAME</th>
                <th className="px-4 py-2 font-Inter">COURSE</th>
                <th className="px-4 py-2 font-Inter">AMOUNT EARNED</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr key={row.id}>
                  <td className="px-4 py-2 font-Inter border-b">
                    {(currentPage - 1) * rowsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-2 font-Inter border-b">{row.date}</td>
                  <td className="px-4 py-2 font-Inter border-b">
                    {row.customer}
                  </td>
                  <td className="px-4 py-2 font-Inter border-b">
                    {row.course}
                  </td>
                  <td className="px-4 py-2 font-Inter border-b">
                    {row.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
