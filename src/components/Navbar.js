import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  const [header, setHeader] = useState(false);
  const positiveBalance = useSelector((state) => state.account.activity);
  const [alert, setAlert] = useState(false);
  const currentTab = window.location.href.split("/")[4];
  useEffect(() => {
    Navigate("/user/home");
  }, []);

  const onClickHome = () => {
    Navigate("/user/home");
  };

  const onClickDeposit = () => {
    Navigate("/user/deposit");
  };

  const onClickWithdraw = () => {
    if (positiveBalance) {
      Navigate("/user/withdraw");
    } else {
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };

  const onClickTransfer = () => {
    if (positiveBalance) {
      Navigate("/user/transfer");
    } else {
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };

  const onClickStatement = () => {
    Navigate("/user/statement");
  };
  const onHeaderButtonClick = () => {
    setHeader(!header);
  };
  const onLogOut = () => {
    localStorage.clear();
    Navigate("/");
  };
  return (
    <>
      <div className="text-center text-slate-900 text-4xl font-bold  m-2">
        ABC BANK
      </div>
      <nav className="bg-white shadow-lg border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="flex justify-center">
            <div className="hidden md:flex items-center space-x-1">
              <p
                className={`${
                  currentTab === "home"
                    ? "text-blue-500 border-blue-500"
                    : "text-gray-500 border-white"
                } py-4 px-3   font-semibold border-b-4 hover:text-blue-500 hover:border-blue-500`}
                onClick={onClickHome}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline-flex p-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </p>
              <p
                className={`${
                  currentTab === "deposit"
                    ? "text-blue-500 border-blue-500"
                    : "text-gray-500 border-white"
                } py-4 px-3   font-semibold border-b-4 hover:text-blue-500 hover:border-blue-500`}
                onClick={onClickDeposit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 p-0.5 inline-flex"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Deposit
              </p>
              <p
                className={`${
                  currentTab === "withdraw"
                    ? "text-blue-500 border-blue-500"
                    : "text-gray-500 border-white"
                } py-4 px-3   font-semibold border-b-4 hover:text-blue-500 hover:border-blue-500`}
                onClick={onClickWithdraw}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline-flex p-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Withdraw
              </p>
              <p
                className={`${
                  currentTab === "transfer"
                    ? "text-blue-500 border-blue-500"
                    : "text-gray-500 border-white"
                } py-4 px-3   font-semibold border-b-4 hover:text-blue-500 hover:border-blue-500`}
                onClick={onClickTransfer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline-flex p-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                Transfer
              </p>
              <p
                className={`${
                  currentTab === "statement"
                    ? "text-blue-500 border-blue-500"
                    : "text-gray-500 border-white"
                } py-4 px-3   font-semibold border-b-4 hover:text-blue-500 hover:border-blue-500`}
                onClick={onClickStatement}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline-flex p-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                Statement
              </p>
              <p
                onClick={onLogOut}
                className="py-4 px-3  text-gray-500 font-semibold border-b-4 border-white hover:text-blue-500 hover:border-blue-500  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline-flex p-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                LogOut
              </p>
            </div>
          </div>
          <div
            className={`${
              alert === true ? "block" : "hidden"
            } flex justify-center`}
          >
            <p className=" text-center py-1 rounded-lg bg-red-700 text-white md:w-3/5 mb-2 ">
              you dont have enough balance to make a transaction
            </p>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={onHeaderButtonClick}
              className="outline-none mobile-menu-button"
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`${header ? "block" : "hidden"} md:hidden mobile-menu`}>
          <ul className="">
            <li className="active">
              <p
                onClick={onClickHome}
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white font-semibold"
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={onClickDeposit}
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Deposite
              </p>
            </li>
            <li>
              <p
                onClick={onClickWithdraw}
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Withdraw
              </p>
            </li>
            <li>
              <p
                onClick={onClickTransfer}
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Transfer
              </p>
            </li>
            <li>
              <p
                onClick={onClickStatement}
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Statement
              </p>
            </li>
            <li>
              <p
                onClick={onLogOut}
                className="block text-sm px-2 py-4 text-gray-500 hover:text-white hover:bg-blue-500 transition duration-300"
              >
                Logout
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
