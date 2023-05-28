import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBankStatement } from "../feature/slice/accountSlice";
import moment from "moment";
function StatementComponent() {
  const userId = localStorage.getItem("user_id");
  const dispatch = useDispatch();
  const statementData = useSelector((state) => state.account.accountStatement);
  const pageSize = 5; // Number of rows to display per page
  const pageCount = Math.ceil(statementData.length / pageSize); // Total number of pages

  const [currentPage, setCurrentPage] = useState(1); // Current page number

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const getCurrentPageData = statementData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchBankStatement({ userId }))
      .then(() => {
        console.group("success");
      })
      .catch(() => {
        console.log("error ");
      });
  }, [dispatch, userId]);
  if (statementData.length === 0) {
    return (
      <>
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-14 "
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">
                no transactions recorded in your account
              </p>
              <p className="text-sm">
                At this time, there is no activity to report on your statement.
                We recommend reviewing your recent account activity and ensuring
                that any transactions you may have made are reflected
                accurately. Should you have any questions or require assistance,
                please do not hesitate to contact our dedicated customer support
                team, who will be more than happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center">
          <div className="w-[650px]  border border-gray-300 mt-14 shadow-lg text-slate-600 font-sans rounded-sm bg-white ">
            <div className="col-start-1 col-end-7">
              <div className=" text-start font-bold px-8  py-3 border-b border-gray-300 ">
                Account Statement
              </div>
              <table>
                <thead>
                  <tr>
                    <th className=" px-1 sm:px-1.5  md:px-5 py-3 text-xs font-bold text-left">
                      #
                    </th>
                    <th className=" px-1 sm:px-1.5  md:px-5 py-3 text-xs font-bold text-left">
                      DATETIME
                    </th>
                    <th className=" px-1 sm:px-1.5  md:px-5 py-3 text-xs font-bold text-left">
                      AMOUNT
                    </th>
                    <th className=" px-1 sm:px-1.5  md:px-5 py-3 text-xs font-bold text-left">
                      TYPE
                    </th>
                    <th className=" px-1 sm:px-1.5  md:px-5 py-3 text-xs font-bold text-left">
                      DETAILS
                    </th>
                    <th className=" px-1 sm:px-1.5  md:px-5 py-3 text-xs font-bold text-left">
                      BALANCE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentPageData.map((items, index) => {
                    return (
                      <tr
                        key={items.account_id}
                        className="border-t border-gray-300"
                      >
                        <td className=" px-1 sm:px-1.5 md:px-5 py-3 text-xs font-bold text-left  ">
                          {index + 1}
                        </td>
                        <td className=" px-1 sm:px-1.5 md:px-5 py-3 text-xs font-bold text-left">
                          {moment(items.account_activity_date).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </td>
                        <td className=" px-1 sm:px-1.5 md:px-5 py-3 text-xs font-bold text-left">
                          {items.account_activity_amount}
                        </td>
                        <td className=" px-1 sm:px-1.5 md:px-5 py-3 text-xs font-bold text-left">
                          {items.account_activity_type}
                        </td>
                        <td className=" px-1 sm:px-1.5 md:px-5 py-3 text-xs font-bold text-left">
                          {items.account_activity_details}
                        </td>
                        <td className=" px-1 sm:px-1.5 md:px-5 py-3 text-xs font-bold text-left">
                          {items.account_balance}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[650px]  mt-2  text-slate-600 font-sans rounded-sm bg-gray-200">
            <div>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    disabled={pageNumber === currentPage}
                    className="px-2 py-1 border border-gray-400 bg-white m-0.5"
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StatementComponent;
