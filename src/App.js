import { Route, Routes } from "react-router-dom";

import Protectedroute from "./protectedRoutes";
import { Suspense, lazy } from "react";
const LoginComponent = lazy(() => import("./components/LoginComponent")); //dynamic import for lazy loading
const SignupComponent = lazy(() => import("./components/SignupComponent"));
const HomeComponent = lazy(() => import("./components/HomeComponent"));
const DepositeComponent = lazy(() => import("./components/DepositeComponent"));
const WithdrawComponent = lazy(() => import("./components/WithdrawComponent"));
const TransferComponent = lazy(() => import("./components/TransferComponent"));
const StatementComponent = lazy(() =>
  import("./components/StatementComponent")
);
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>...Loading</h1>}>
                <LoginComponent />
              </Suspense>
            }
          />

          <Route path="/register" element={<SignupComponent />} />
          <Route
            path="/user"
            element={
              <Suspense fallback={<h1>...Loading</h1>}>
                <Protectedroute>
                  <Navbar />
                </Protectedroute>
              </Suspense>
            }
          >
            <Route
              path="home"
              element={
                <Suspense fallback={<h1>...Loading</h1>}>
                  <Protectedroute>
                    <HomeComponent />
                  </Protectedroute>
                </Suspense>
              }
            />

            <Route
              path="deposit"
              element={
                <Suspense fallback={<h1>...Loading</h1>}>
                  <Protectedroute>
                    <DepositeComponent />
                  </Protectedroute>
                </Suspense>
              }
            />
            <Route
              path="withdraw"
              element={
                <Suspense fallback={<h1>...Loading</h1>}>
                  <Protectedroute>
                    <WithdrawComponent />
                  </Protectedroute>
                </Suspense>
              }
            />
            <Route
              path="transfer"
              element={
                <Suspense fallback={<h1>...Loading</h1>}>
                  <Protectedroute>
                    <TransferComponent />
                  </Protectedroute>
                </Suspense>
              }
            />
            <Route
              path="statement"
              element={
                <Suspense fallback={<h1>...Loading</h1>}>
                  <Protectedroute>
                    <StatementComponent />
                  </Protectedroute>
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
