import instance from "./intreceptor";
const getDetails = (data) => instance.get(`user/home?userId=${data.userId}`);

const addMoney = (data) =>
  instance.post(`user/deposit?userId=${data.userId}`, data);

const withdrawMoney = (data) =>
  instance.post(`user/withdraw?userId=${data.userId}`, data);

const transferMoney = (data) =>
  instance.post(`user/transfer?userId=${data.userId}`, data);

const getStatement = (data) =>
  instance.get(`user/statement?userId=${data.userId}`);

export { getDetails, getStatement, addMoney, withdrawMoney, transferMoney };
