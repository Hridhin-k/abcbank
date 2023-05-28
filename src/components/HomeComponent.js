import React, { useEffect, useState } from "react";
import { fetchBasicDetails } from "../feature/slice/accountSlice";
import { useDispatch, useSelector } from "react-redux";
function HomeComponent() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("user_id");
  const userEmail = localStorage.getItem("user_email");
  const [balance, setBalance] = useState(0);
  const userAccountData = useSelector((state) => state.account.accountDetail);
  useEffect(() => {
    dispatch(fetchBasicDetails({ userId }))
      .then(() => {
        if (userAccountData.length !== 0) {
          setBalance(userAccountData?.account_balance);
        }
      })
      .catch(() => {
        console.log("basic detail fetch failure");
      });
  }, [
    dispatch,
    userAccountData?.account_balance,
    userAccountData.length,
    userId,
  ]);

  return (
    <>
      <div className="flex justify-center mx-2 md:mx-0">
        <div className="w-[650px]  border border-gray-300 mt-14 shadow-lg text-slate-600 font-sans rounded-sm bg-white">
          <div className=" border-b border-gray-300">
            <div className=" text-start font-bold px-8  py-3  ">
              Welcome john
            </div>
          </div>

          <div className=" py-3 flex border-b border-gray-300">
            <div className="w-40 pl-8 ">YOUR ID</div>
            <div className="font-bold">{userEmail}</div>
          </div>
          <div className="py-3 flex ">
            <div className="w-40 pl-8">YOUR BALANCE</div>
            <div className="font-bold">{balance} INR</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
