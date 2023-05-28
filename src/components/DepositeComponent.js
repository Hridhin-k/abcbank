import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { depositAmount } from "../feature/slice/accountSlice";

function DepositeComponent() {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [messageFlag, setMessageFlag] = useState(false);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("user_id");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(depositAmount({ userId, amount }))
      .then(() => {
        setAmount(0);
        setMessage("amount credited successfully !!");
        setMessageFlag(true);
        setTimeout(() => {
          setMessage("");
          setMessageFlag(false);
        }, 4000);
      })
      .catch(() => {
        setAmount(0);
        setMessage("Something went wrong ");
        setMessageFlag(false);
        setTimeout(() => {
          setMessage("");
          setMessageFlag(false);
        }, 4000);
      });
  };
  return (
    <>
      <div className="flex justify-center  mx-2 md:mx-0">
        <div className="w-[650px]  border border-gray-300 mt-14 shadow-lg text-slate-600 font-sans rounded-sm bg-white">
          <div className=" text-start font-bold px-8  py-3  border-b border-gray-300 ">
            Deposit Money
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
                placeholder="Enter amount to deposit"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
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
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Deposit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DepositeComponent;
