import type { RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";
import { useState } from "react";
import type { TabsProps } from "antd";
import List from "./Order/List";
import Detail from "./Order/Detail";
import ServiceReport from "./Stock/ServiceReport";
import ServiceLog from "./Stock/ServiceLog";

type TabOption = "order" | "stock";

const LogTabs = () => {
  const [mode, setMode] = useState<TabOption>("order");
  const [activeKey, setActiveKey] = useState("1");

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
    setActiveKey("1");
  };

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const OrderItems: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <p className="font-inter text-center mx-4 w-48">Sipariş Logları</p>
      ),
      children: <List />,
    },
    {
      key: "2",
      label: (
        <p className="font-inter text-center mx-4 w-48">Detaylı Loglama</p>
      ),
      children: <Detail />,
    },
  ];

  const StockItems: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <p className="font-inter text-center mx-4 w-48">Servis Durum Raporu</p>
      ),
      children: <ServiceReport />,
    },
    {
      key: "2",
      label: <p className="font-inter text-center mx-4 w-48">Servis Logu</p>,
      children: <ServiceLog />,
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col">
      <Radio.Group
        size="large"
        onChange={handleModeChange}
        value={mode}
        className="mt-2"
      >
        <Radio.Button className="font-inter" value="order">
          Sipariş
        </Radio.Button>
        <Radio.Button className="font-inter" value="stock">
          Stok - Fiyat
        </Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        className="w-full"
        activeKey={activeKey}
        items={mode == "order" ? OrderItems : StockItems}
        onChange={onChange}
      />
    </div>
  );
};

export default LogTabs;
