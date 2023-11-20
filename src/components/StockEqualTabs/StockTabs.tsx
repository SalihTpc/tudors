import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useState } from "react";
import ScheduledTask from "./ScheduledTask";
import InstantStart from "./InstantStart";

const StockTabs = () => {
  const [activeKey, setActiveKey] = useState("1");
  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <p className="font-inter text-center mx-4 w-48">Zamanlanmış Görev</p>
      ),
      children: <ScheduledTask />,
    },
    {
      key: "2",
      label: (
        <p className="font-inter text-center mx-4 w-48">Anlık Çalıştırma</p>
      ),
      children: <InstantStart />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      className="w-full"
      activeKey={activeKey}
      items={items}
      onChange={onChange}
    />
  );
};

export default StockTabs;
