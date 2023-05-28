import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/slice/userSlice";
import accountReducer from "../feature/slice/accountSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
  },
});
