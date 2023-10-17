import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import generalsApi from "../api/generals.api";
import playSvg from "../assets/icons/play.svg";
import stopSvg from "../assets/icons/stop.svg";
import { StateStatus } from "../lib/generalValues";
import Action from "./Action";

const Actions = () => {
  const [selected, setSelected] = useState("");
  const [serviceStatus, setServiceStatus] = useState<StateStatus[]>([]);
  const [actionCounter, setActionCounter] = useState(0);
  const location = useLocation();

  const getServiceStatus = async () => {
    const res = await generalsApi.getServiceStates();
    setServiceStatus(res);
  };

  useEffect(() => {
    setSelected(location.pathname.slice(1));
  }, [location.pathname]);

  useEffect(() => {
    getServiceStatus();
  }, [actionCounter]);
  return (
    <div className="flex items-center justify-center my-10 [&>*]:mr-8 font-inter">
      <Action
        id={1}
        state={serviceStatus[0]?.state}
        icon={serviceStatus[0]?.state ? playSvg : stopSvg}
        action={`${serviceStatus[0]?.state ? "Running" : "Stopped"}`}
        process1={"18"}
        process2={"2"}
        selected={selected.endsWith("ordertransfer")}
        toUrl="/dashboard/ordertransfer"
        setActionCounter={setActionCounter}
      />
      {/* <Action
        title={"Kargo Entegrasyonu"}
        icon={stopSvg}
        action={"Stopped"}
        process1={"84"}
        process2={"0"}
        selected={selected.endsWith("orderentegration")}
        toUrl="/dashboard/orderentegration"
      /> */}
      <Action
        id={2}
        state={serviceStatus[1]?.state}
        icon={serviceStatus[1]?.state ? playSvg : stopSvg}
        action={`${serviceStatus[1]?.state ? "Running" : "Stopped"}`}
        process1={"145845"}
        process2={"0"}
        selected={selected.endsWith("stockequal")}
        toUrl="/dashboard/stockequal"
        setActionCounter={setActionCounter}
      />
    </div>
  );
};

export default Actions;
