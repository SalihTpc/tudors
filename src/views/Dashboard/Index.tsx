import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Actions from "../../components/Actions";

const DashBoard = lazy(() => import("./DashBoard"));
const OrderTransfer = lazy(() => import("./OrderTransfer"));
const OrderEntegration = lazy(() => import("./OrderEntegration"));
const StockEqual = lazy(() => import("./StockEqual"));

const DashboardIndex = () => {
  return (
    <>
      <Actions />
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
          <Route path="/ordertransfer" element={<OrderTransfer />} />
          <Route path="/orderentegration" element={<OrderEntegration />} />
          <Route path="/stockequal" element={<StockEqual />} />
          <Route path="" element={<DashBoard />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default DashboardIndex;
