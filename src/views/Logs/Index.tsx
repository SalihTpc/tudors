import { Suspense, lazy } from "react";
import { Spin } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import Actions from "../../components/Actions";

const Logs = lazy(() => import("./Logs"));

const LogsIndex = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-w-full min-h-full">
          <Spin tip="Loading..." size="large">
            <div className="p-12 bg-gray-300 rounded-lg" />
          </Spin>
        </div>
      }
    >
      <div className="my-4 mx-48 font-inter">
        <Actions />
        <Routes>
          <Route path="" element={<Logs />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default LogsIndex;
