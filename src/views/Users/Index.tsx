import { Suspense, lazy } from "react";
import { Spin } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";

const Users = lazy(() => import("./Users"));

const SettingsIndex = () => {
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
      <Routes>
        <Route path="" element={<Users />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Suspense>
  );
};

export default SettingsIndex;
