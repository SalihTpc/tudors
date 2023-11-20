import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import generalsApi from "../api/generals.api";
import playSvg from "../assets/icons/play.svg";
import stopSvg from "../assets/icons/stop.svg";
import { StateStatus } from "../lib/generalValues";
import { Notification, NotificationType } from "../lib/notification.lib";
import Action from "./Action";

const Actions = () => {
  const [selected, setSelected] = useState("");
  const [serviceStatus, setServiceStatus] = useState<StateStatus[]>([]);
  const [actionCounter, setActionCounter] = useState(0);
  const location = useLocation();

  const getServiceStatus = async () => {
    try {
      const res = await generalsApi.getServiceStates();
      setServiceStatus(res);
      // message.success("Stateler güncellendi.");
    } catch (error: any) {
      Notification({
        type: NotificationType.Error,
        message: error,
      });
    }
  };

  useEffect(() => {
    setSelected(location.pathname.slice(1));
  }, [location.pathname]);

  useEffect(() => {
    getServiceStatus();
  }, [actionCounter]);
  return (
    <div className="flex items-center justify-center my-10 [&>*]:mr-8 font-inter">
      {serviceStatus.length > 0 ? (
        <>
          <Action
            id={1}
            state={serviceStatus.filter((item) => item.id == 1)[0].state}
            icon={
              serviceStatus.filter((item) => item.id == 1)[0].state
                ? playSvg
                : stopSvg
            }
            action={`${
              serviceStatus.filter((item) => item.id == 1)[0].state
                ? "Running"
                : "Stopped"
            }`}
            process1={"18"}
            process2={"2"}
            selected={selected.endsWith("ordertransfer")}
            toUrl="/dashboard/ordertransfer"
            setActionCounter={setActionCounter}
          />
          <Action
            id={2}
            state={serviceStatus.filter((item) => item.id == 2)[0].state}
            icon={
              serviceStatus.filter((item) => item.id == 2)[0].state
                ? playSvg
                : stopSvg
            }
            action={`${
              serviceStatus.filter((item) => item.id == 2)[0].state
                ? "Running"
                : "Stopped"
            }`}
            process1={"145845"}
            process2={"0"}
            selected={selected.endsWith("stockequal")}
            toUrl="/dashboard/stockequal"
            setActionCounter={setActionCounter}
          />
        </>
      ) : null}
    </div>
  );
};

export default Actions;
