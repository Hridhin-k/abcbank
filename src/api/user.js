import instance from "./intreceptor";
const createNewUser = (data) => instance.post("/register", data);

const userLogin = (data) =>
  instance.post("/login", {
    username: data.userEmail,
    password: data.userPassword,
  });
export { createNewUser, userLogin };
