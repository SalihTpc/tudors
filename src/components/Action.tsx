import { RetweetOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import generalsApi from "../api/generals.api";
import productApi from "../api/product.api";
import settingsSvg from "../assets/icons/settings.svg";
import { StockEqualStatus, TransferStatus } from "../lib/generalValues";
import { Notification, NotificationType } from "../lib/notification.lib";
import {
  setOrderLastTime,
  setStockLastTime,
} from "../store/features/status/status.slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

type Props = {
  id: number;
  state: boolean;
  icon: string;
  action: string;
  process1: string;
  process2: string;
  selected?: boolean;
  toUrl: string;
  setActionCounter: Function;
};

const Action = ({
  id,
  icon,
  action,
  process1,
  process2,
  state,
  selected = false,
  toUrl,
  setActionCounter,
}: Props) => {
  const transferStatus: TransferStatus = useAppSelector(
    (state) => state.status.transferStatus
  );

  const stockEqualStatus: StockEqualStatus = useAppSelector(
    (state) => state.status.stockEqual
  );

  const orderLastTime = useAppSelector(
    (state) => state.status.orderLastExecuteTime
  );

  const stockLastTime = useAppSelector(
    (state) => state.status.stockLastExecuteTime
  );

  const dispatch = useAppDispatch();

  const play = async () => {
    if (state) {
      if (id == 1) {
        try {
          await generalsApi.stopSiparisJob();
          setActionCounter((state: number) => state + 1);
          message.success("Sipariş Aktarımı durduruldu");
        } catch (error: any) {
          Notification({
            type: NotificationType.Error,
            message: error,
          });
        }
      } else {
        try {
          await productApi.stopProductJob();
          setActionCounter((state: number) => state + 1);
          message.success("Stok - Fiyat Eşitleme durduruldu");
        } catch (error: any) {
          Notification({
            type: NotificationType.Error,
            message: error,
          });
        }
      }
    } else {
      try {
        if (id == 1) {
          await generalsApi.startSiparisJob({
            duration: transferStatus.time,
            siparisDurumlari: transferStatus?.order,
          });
          setActionCounter((state: number) => state + 1);
          message.success("Sipariş Aktarımı başlatıldı.");
        } else {
          await productApi.startProductJob({
            duration: stockEqualStatus.duration,
            startAt: stockEqualStatus.time,
          });
          message.success("Stok - Fiyat Eşitleme başlatıldı.");
          setActionCounter((state: number) => state + 1);
        }
      } catch (error: any) {
        Notification({
          type: NotificationType.Error,
          message: error,
        });
      }
    }
  };

  const refresh = async () => {
    if (id == 1) {
      try {
        const orderRes = await generalsApi.getSiparisLastExecuteTime();
        dispatch(setOrderLastTime(orderRes));
      } catch (error: any) {
        Notification({
          type: NotificationType.Error,
          message: error,
        });
      }
    } else {
      try {
        const stockRes = await productApi.getStockLastExecuteTime();
        dispatch(setStockLastTime(stockRes));
      } catch (error: any) {
        Notification({
          type: NotificationType.Error,
          message: error,
        });
      }
    }
  };

  return (
    <div className="bg-tudorsGray pt-3 px-3 pb-1 flex flex-col w-[273px] h-[91px] rounded-lg justify-between font-inter">
      <Link to={toUrl} className="flex items-center justify-between">
        <h4
          className={`${selected ? "font-bold" : null} text-[14px]/[16.94px]`}
        >
          {id == 1 ? "Sipariş Aktarımı" : "Stok - Fiyat Eşitleme"}
        </h4>
        <img
          className="w-[14px] h-[14px]"
          src={settingsSvg}
          alt="settingsSvg"
        />
      </Link>
      <div className="flex items-center justify-between">
        <Button
          type="text"
          className="flex justify-center items-center font-inter ml-0 pl-2"
          onClick={play}
        >
          <img className="w-5 h-5 p-1 pl-0" src={icon} alt={icon} />
          <p className="text-[10px]/[12.1px]">{action}</p>
        </Button>
        <div className="flex items-center gap-1">
          <Button
            shape="circle"
            size="small"
            className="p-0 m-0 flex items-center justify-center"
            onClick={refresh}
          >
            <RetweetOutlined />
          </Button>
          <div>
            <p className="text-[10px]/[12.1px]">Son Çalışma zamanı</p>
            <p className="text-[10px]/[12.1px]">
              {id == 1
                ? dayjs(orderLastTime).format("DD/MM/YYYY - HH:mm:ss")
                : dayjs(stockLastTime).format("DD/MM/YYYY - HH:mm:ss")}
            </p>
          </div>
        </div>
        <p className="text-xs hidden">
          {process1} / <span className="text-[#ED0909]">{process2}</span>
        </p>
      </div>
    </div>
  );
};

export default Action;
