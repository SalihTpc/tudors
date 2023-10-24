import { Spin } from "antd";
import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { useAppDispatch } from "../store/hooks";
import { getCriteria } from "../store/features/status/status.action";

const DashboardIndex = lazy(() => import("./Dashboard/Index"));
const SettingsIndex = lazy(() => import("./Settings/Index"));
const LogsIndex = lazy(() => import("./Logs/Index"));
const UsersIndex = lazy(() => import("./Users/Index"));

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCriteria());
  }, []);
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
          <Route path="settings/*" element={<SettingsIndex />} />
          <Route path="dashboard/*" element={<DashboardIndex />} />
          <Route path="logs/*" element={<LogsIndex />} />
          <Route path="users/*" element={<UsersIndex />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Home;
