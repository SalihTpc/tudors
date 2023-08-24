import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const DashboardIndex = lazy(() => import("./Dashboard/Index"));
const LogsIndex = lazy(() => import("./Logs/Index"));

const Home = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-w-full min-h-full">
            <Spin tip="Loading..." size="large">
              <div className="p-12 bg-gray-300 rounded-lg" />
            </Spin>
          </div>
        }
      >
        <Routes>
          <Route path="dashboard/*" element={<DashboardIndex />} />
          <Route path="logs/*" element={<LogsIndex />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Home;
