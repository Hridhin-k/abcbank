import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawAmount } from "../feature/slice/accountSlice";

function WithdrawComponent() {
  const [withdrawedAmount, setWithdrawedAmount] = useState(0);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("user_id");
  const userBalance = useSelector((state) => state.account.accountDetail);
  const [balanceFlag, setBalanceFlag] = useState(false);
  const [message, setMessage] = useState("");
  const [messageFlag, setMessageFlag] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(withdrawAmount({ userId, withdrawedAmount }))
      .then(() => {
        setWithdrawedAmount(0);
        setMessage("Amount debited successfully !!");
        setMessageFlag(true);
        setTimeout(() => {
          setMessage("");
          setMessageFlag(false);
        }, 4000);
      })
      .catch(() => {
        setWithdrawedAmount(0);
        setMessage("Something went wrong ");
        setMessageFlag(false);
        setTimeout(() => {
          setMessage("");
          setMessageFlag(false);
        }, 4000);
      });
  };
  useEffect(() => {
    if (parseInt(userBalance.account_balance) < withdrawedAmount) {
      setBalanceFlag(true);
    } else {
      setBalanceFlag(false);
    }
  }, [userBalance.account_balance, withdrawedAmount]);

  return (
    <>
      <div className="flex justify-center  mx-2 md:mx-0">
        <div className="w-[650px]  border border-gray-300 mt-14 shadow-lg text-slate-600 font-sans rounded-sm bg-white">
          <div className=" text-start font-bold px-8  py-3  border-b border-gray-300 ">
            Withdraw Money
          </div>
          <form onSubmit={onSubmit}>
            <label
              type="text"
              className="block text-sm font-semibold text-gray-800 px-8  mt-6"
            >
              Amount
            </label>
            <div className="px-8">
              <input
                type="number"
                required
                onChange={(e) => setWithdrawedAmount(e.target.value)}
                value={withdrawedAmount}
                max={parseInt(userBalance.account_balance)}
                placeholder="Enter amount to withdraw"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <p
              className={`${
                balanceFlag ? "text-red-600" : "text-white"
              } text-end mx-8 mt-1`}
            >
              not enough balance !!
            </p>
            <p
              className={`${
                messageFlag ? "text-green-500" : "text-red-600"
              } text-end mx-8 h-5`}
            >
              {message}
            </p>
            <div className="my-6 px-8">
              <button
                type="submit"
                disabled={balanceFlag}
                className={`${
                  balanceFlag ? "bg-red-600" : "bg-blue-700"
                } w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  rounded-md  focus:outline-none`}
              >
                Withdraw
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default WithdrawComponent;
