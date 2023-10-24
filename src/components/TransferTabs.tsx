import { Tabs } from "antd";
import type { TabsProps } from "antd";
import List from "./List";
import ManuelTransfer from "./ManuelTransfer";

const TransferTabs = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <p className="font-inter text-center mx-4 w-40">Standart</p>,
      children: <List />,
    },
    {
      key: "2",
      label: <p className="font-inter text-center mx-4 w-40">Manuel Aktar</p>,
      children: <ManuelTransfer />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default TransferTabs;
