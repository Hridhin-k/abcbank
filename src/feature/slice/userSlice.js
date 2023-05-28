import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewUser, userLogin } from "../../api/user";

const initialState = {
  userName: "",
  userEmail: "",
  userId: null,
  token: false,
};

export const addNewUser = createAsyncThunk("register", async (data) => {
  const newUser = await createNewUser(data);
  return newUser.response;
});
export const login = createAsyncThunk("login", async (data) => {
  const signup = await userLogin(data);
  return signup.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      console.log("user created");
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      console.log("error in user signup");
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userEmail = action.payload.user_email;
      state.userName = action.payload.user_name;
      state.userId = action.payload.user_id;
      state.token = true;
      localStorage.setItem("user_token", action.payload.access_token);
      localStorage.setItem("user_email", action.payload.user_email);
      localStorage.setItem("user_id", action.payload.user_id);
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(state);
    });
  },
});
export default userSlice.reducer;
