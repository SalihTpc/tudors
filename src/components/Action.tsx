import { Button, message } from "antd";
import { Link } from "react-router-dom";
import generalsApi from "../api/generals.api";
import productApi from "../api/product.api";
import settingsSvg from "../assets/icons/settings.svg";
import { StockEqualStatus, TransferStatus } from "../lib/generalValues";
import { useAppSelector } from "../store/hooks";
import { Notification, NotificationType } from "../lib/notification.lib";

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
            duration: 24,
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
          className="flex justify-center items-center font-inter ml-0 pl-0"
          onClick={play}
        >
          <img className="w-5 h-5 p-1 pl-0" src={icon} alt={icon} />
          <p className="text-[10px]/[12.1px]">{action}</p>
        </Button>
        <p className="text-xs">
          {process1} / <span className="text-[#ED0909]">{process2}</span>
        </p>
      </div>
    </div>
  );
};

export default Action;
