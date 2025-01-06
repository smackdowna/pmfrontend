// import { ICONS } from "../../assets";

// const TransactionHistory = () => {
//   const data = [
//     {
//       id: 1,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 2,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 1,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 2,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 1,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 2,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 1,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 2,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 1,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     {
//       id: 2,
//       date: "23 Oct 2024",
//       customer: "John Jacobs",
//       course: "Adobe Premier Pro",
//       amount: "₹500",
//     },
//     // Add more rows as needed
//   ];

//   return (
//     <div className="p-4">
//       <h1 className="text-lg font-semibold mb-4">Transaction History</h1>
//       <div className="overflow-x-auto ">
//         <div className="bg-white rounded-xl flex flex-col border border-neutral-55">
//           <div className="flex p-3 justify-between items-center ">
//             <div className="border flex gap-2 border-neutral-55 rounded-xl p-2 max-w-[190px]">
//               <img src={ICONS.search} />
//               <input
//                 name="search"
//                 placeholder="Search"
//                 className="max-w-[140px]"
//               />
//             </div>
//             <div className="flex gap-2 justify-center items-center">
//               <div className="flex bg-neutral-60 p-2 rounded-lg">
//                 <p>Export</p>
//               </div>
//               <div className="flex bg-neutral-60 p-2 rounded-lg">
//                 <img src={ICONS.Filter} />
//               </div>
//               <div className="flex bg-neutral-60 p-2 rounded-lg">
//                 <img src={ICONS.SortVertical} />
//               </div>
//             </div>
//           </div>
//           <table className="table-auto w-full rounded-b-xl border-none  text-left">
//             <thead>
//               <tr className="bg-neutral-60">
//                 <th className="px-4 py-2 font-Inter">SR.NO</th>
//                 <th className="px-4 py-2 font-Inter">DATE OF PURCHASE</th>
//                 <th className="px-4 py-2 font-Inter">CUSTOMER NAME</th>
//                 <th className="px-4 py-2 font-Inter">COURSE</th>
//                 <th className="px-4 py-2 font-Inter">AMOUNT EARNED</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, index) => (
//                 <tr key={row.id} className="">
//                   <td className="px-4 py-2 font-Inter border-b">{index + 1}</td>
//                   <td className="px-4 py-2 font-Inter border-b">{row.date}</td>
//                   <td className="px-4 py-2 font-Inter border-b">
//                     {row.customer}
//                   </td>
//                   <td className="px-4 py-2 font-Inter border-b">
//                     {row.course}
//                   </td>
//                   <td className="px-4 py-2 font-Inter border-b">
//                     {row.amount}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionHistory;
import { ICONS } from "../../assets";
import { useState } from "react";

const TransactionHistory = () => {
  const data = [
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 1,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    {
      id: 2,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
    // Add more rows as needed
    {
      id: 11,
      date: "23 Oct 2024",
      customer: "John Jacobs",
      course: "Adobe Premier Pro",
      amount: "₹500",
    },
  ];

  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice(
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

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Transaction History</h1>
      <div className="overflow-x-auto">
        <div className="bg-white rounded-xl flex flex-col border border-neutral-55">
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
                <p>Export</p>
              </div>
              <div className="flex bg-neutral-60 p-2 rounded-lg">
                <img src={ICONS.Filter} alt="Filter Icon" />
              </div>
              <div className="flex bg-neutral-60 p-2 rounded-lg">
                <img src={ICONS.SortVertical} alt="Sort Icon" />
              </div>
            </div>
          </div>
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
          {/* Pagination Controls */}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
