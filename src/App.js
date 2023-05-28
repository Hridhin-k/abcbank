import { Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import HomeComponent from "./components/HomeComponent";
import DepositeComponent from "./components/DepositeComponent";
import WithdrawComponent from "./components/WithdrawComponent";
import TransferComponent from "./components/TransferComponent";
import StatementComponent from "./components/StatementComponent";
import Navbar from "./components/Navbar";
import Protectedroute from "./protectedRoutes";

function App() {
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <Routes>
          <Route path="/" element={<LoginComponent />} />

          <Route path="/register" element={<SignupComponent />} />
          <Route
            path="/user"
            element={
              <Protectedroute>
                <Navbar />
              </Protectedroute>
            }
          >
            <Route
              path="home"
              element={
                <Protectedroute>
                  <HomeComponent />
                </Protectedroute>
              }
            />

            <Route
              path="deposit"
              element={
                <Protectedroute>
                  <DepositeComponent />
                </Protectedroute>
              }
            />
            <Route
              path="withdraw"
              element={
                <Protectedroute>
                  <WithdrawComponent />
                </Protectedroute>
              }
            />
            <Route
              path="transfer"
              element={
                <Protectedroute>
                  <TransferComponent />
                </Protectedroute>
              }
            />
            <Route
              path="statement"
              element={
                <Protectedroute>
                  <StatementComponent />
                </Protectedroute>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
