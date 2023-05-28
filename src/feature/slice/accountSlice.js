import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDetails,
  getStatement,
  addMoney,
  withdrawMoney,
  transferMoney,
} from "../../api/account";
const initialState = {
  activity: false,
  accountDetail: [],
  accountStatement: [],
};

export const fetchBasicDetails = createAsyncThunk("home", async (data) => {
  const basicDetails = await getDetails(data);
  return basicDetails.data;
});

export const depositAmount = createAsyncThunk("deposit", async (data) => {
  const deposit = await addMoney(data);
  return deposit.data;
});

export const withdrawAmount = createAsyncThunk("withdraw", async (data) => {
  const withdraw = await withdrawMoney(data);
  return withdraw.data;
});

export const transferAmount = createAsyncThunk("transfer", async (data) => {
  const transfer = await transferMoney(data);
  return transfer.data;
});

export const fetchBankStatement = createAsyncThunk(
  "statement",
  async (data) => {
    const accountStatement = await getStatement(data);
    return accountStatement.data;
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBasicDetails.fulfilled, (state, action) => {
      state.accountDetail = action.payload;
      if (action.payload.account_balance > 1) {
        state.activity = true;
      }
    });
    builder.addCase(fetchBasicDetails.rejected, (state, action) => {
      console.log(state, action);
    });
    builder.addCase(depositAmount.fulfilled, (state, action) => {
      console.log(state);
    });
    builder.addCase(depositAmount.rejected, (state, action) => {
      console.log(state);
    });
    builder.addCase(transferAmount.fulfilled, (state, action) => {
      console.log(state);
    });
    builder.addCase(transferAmount.rejected, (state, action) => {
      console.log(state);
    });
    builder.addCase(fetchBankStatement.fulfilled, (state, action) => {
      state.accountStatement = action.payload;
    });
    builder.addCase(fetchBankStatement.rejected, (state, action) => {});
  },
});
export default accountSlice.reducer;
