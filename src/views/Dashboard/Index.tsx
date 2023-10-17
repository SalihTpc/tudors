import { Alert, Spin } from "antd";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getCriteria } from "../../store/features/status/status.action";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const DashBoard = lazy(() => import("./DashBoard"));
const OtherIndex = lazy(() => import("./OtherIndex"));

const DashboardIndex = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCriteria());
  }, []);
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
        <Route path="/*" element={<OtherIndex />} />
        <Route path="" element={<DashBoard />} />
      </Routes>
    </Suspense>
  );
};

export default DashboardIndex;
