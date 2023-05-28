import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../feature/slice/userSlice";

function LoginComponent() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ userEmail, userPassword }))
      .then(() => {
        Navigate("/user");
      })
      .catch(() => {
        console.log("error in login");
      });
  };
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <div>
            <h1 className="text-3xl font-semibold text-start text-slate-700 ">
              Login to your account
            </h1>
            <form onSubmit={onSubmit} className="mt-6">
              <div className="mb-2">
                <label
                  type="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  type="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  required
                  onChange={(e) => setUserPassword(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <p>
                <input className="m-1" type="checkbox" />
                Remember me
              </p>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-8 text-sm     font-light text-center text-gray-700">
              Don't have an account?
              <p
                onClick={() => {
                  Navigate("/register");
                }}
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
