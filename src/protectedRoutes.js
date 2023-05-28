import { Navigate } from "react-router-dom";

const Protectedroute = ({ children }) => {
  const token = localStorage.getItem("user_token");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protectedroute;
