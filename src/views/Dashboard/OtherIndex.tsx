import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Actions from "../../components/Actions";

const OrderTransfer = lazy(() => import("./OrderTransfer"));
// const OrderEntegration = lazy(() => import("./OrderEntegration"));
const StockEqual = lazy(() => import("./StockEqual"));

const OtherIndex = () => {
  return (
    <>
      <Actions />
      <div className="my-2 mx-48 font-inter">
        <h2 className="text-xl mb-3">Şartlar</h2>
        <hr className="border border-solid border-black" />
      </div>
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
          {/* <Route path="/orderentegration" element={<OrderEntegration />} /> */}
          <Route path="/stockequal" element={<StockEqual />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default OtherIndex;
