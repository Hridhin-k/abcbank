import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transferAmount } from "../feature/slice/accountSlice";
function TransferComponent() {
  const [transferEmail, setTransferEmail] = useState("");
  const [transferedAmount, setTransferedAmount] = useState(0);
  const userId = localStorage.getItem("user_id");
  const dispatch = useDispatch();
  const userBalance = useSelector((state) => state.account.accountDetail);
  const [balanceFlag, setBalanceFlag] = useState(false);
  const [message, setMessage] = useState("");
  const [messageFlag, setMessageFlag] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(transferAmount({ userId, transferEmail, transferedAmount }))
      .then(() => {
        setTransferEmail("");
        setTransferedAmount(0);
        setMessage("Amount debited successfully !!");
        setMessageFlag(true);
        setTimeout(() => {
          setMessage("");
          setMessageFlag(false);
        }, 4000);
      })
      .catch(() => {
        setTransferEmail("");
        setTransferedAmount(0);
        setMessage("Something went wrong ");
        setMessageFlag(false);
        setTimeout(() => {
          setMessage("");
          setMessageFlag(false);
        }, 4000);
      });
  };
  useEffect(() => {
    if (parseInt(userBalance.account_balance) < transferedAmount) {
      setBalanceFlag(true);
    } else {
      setBalanceFlag(false);
    }
  }, [transferedAmount, userBalance.account_balance]);
  return (
    <>
      <div className="flex justify-center  mx-2 md:mx-0">
        <div className="w-[650px]  border border-gray-300 mt-14 shadow-lg text-slate-600 font-sans rounded-sm  bg-white">
          <div className=" text-start font-bold px-8  py-3  border-b border-gray-300 ">
            Tranfer Money
          </div>
          <form onSubmit={onSubmit}>
            <label
              type="text"
              className="block text-sm font-semibold text-gray-800 px-8  mt-6"
            >
              Email address
            </label>
            <div className="px-8">
              <input
                type="email"
                required
                value={transferEmail}
                onChange={(e) => {
                  setTransferEmail(e.target.value);
                }}
                placeholder="Enter email"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
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
                value={transferedAmount}
                onChange={(e) => setTransferedAmount(e.target.value)}
                placeholder="Enter amount "
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
                Transfer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TransferComponent;
