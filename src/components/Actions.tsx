import Action from "./Action";
import playSvg from "../assets/icons/play.svg";
import stopSvg from "../assets/icons/stop.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Actions = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname.slice(1));
  }, [location.pathname]);
  return (
    <div className="flex items-center justify-center my-10 [&>*]:mr-8 font-inter">
      <Action
        title={"Sipariş Aktarımı"}
        icon={playSvg}
        action={"Running ( 04:14 )"}
        process1={"18"}
        process2={"2"}
        selected={selected.endsWith("ordertransfer")}
        toUrl="/dashboard/ordertransfer"
      />
      <Action
        title={"Kargo Entegrasyonu"}
        icon={stopSvg}
        action={"Stopped"}
        process1={"84"}
        process2={"0"}
        selected={selected.endsWith("orderentegration")}
        toUrl="/dashboard/orderentegration"
      />
      <Action
        title={"Stok - Fiyat Eşitleme"}
        icon={stopSvg}
        action={"Stopped"}
        process1={"145845"}
        process2={"0"}
        selected={selected.endsWith("stockequal")}
        toUrl="/dashboard/stockequal"
      />
    </div>
  );
};

export default Actions;
