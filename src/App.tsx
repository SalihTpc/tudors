import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const Login = lazy(() => import("./views/Login"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-w-screen min-h-screen">
            <Spin tip="Loading..." size="large">
              <div className="p-12 bg-gray-300 rounded-lg" />
            </Spin>
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
