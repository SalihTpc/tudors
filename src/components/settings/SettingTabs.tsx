import type { TabsProps } from "antd";
import { Tabs } from "antd";
import General from "./General";
import { useState } from "react";
import Payment from "./payment/Payment";
import Special from "./Special";
import Smtp from "./Smtp";

const SettingTabs = () => {
  const [activeKey, setActiveKey] = useState("1");
  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <p className="font-inter text-center mx-4 w-48">Genel Parametreler</p>
      ),
      children: <General />,
    },
    {
      key: "2",
      label: (
        <p className="font-inter text-center mx-4 w-48">Ödeme Parametreleri</p>
      ),
      children: <Payment />,
    },
    {
      key: "3",
      label: (
        <p className="font-inter text-center mx-2 w-44">Özel Parametreler</p>
      ),
      children: <Special />,
    },
    {
      key: "4",
      label: <p className="font-inter text-center mx-2 w-44">SMTP</p>,
      children: <Smtp />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      className="w-[840px]"
      activeKey={activeKey}
      items={items}
      onChange={onChange}
    />
  );
};

export default SettingTabs;
