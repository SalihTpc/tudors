import { Link } from "react-router-dom";
import settingsSvg from "../assets/icons/settings.svg";
import { Button } from "antd";
import { useAppSelector } from "../store/hooks";

type Props = {
  id: number;

  icon: string;
  action: string;
  process1: string;
  process2: string;
  selected?: boolean;
  toUrl: string;
};

const Action = ({
  id,

  icon,
  action,
  process1,
  process2,
  selected = false,
  toUrl,
}: Props) => {
  const status = useAppSelector((state) =>
    id == 1 ? state.status.transferStatus : state.status.stockEqual
  );

  const play = async () => {
    console.log(status);
  };

  return (
    <div className="bg-tudorsGray pt-3 px-3 pb-1 flex flex-col w-[273px] h-[91px] rounded-lg justify-between font-inter">
      <div className="flex items-center justify-between">
        <h4
          className={`${selected ? "font-bold" : null} text-[14px]/[16.94px]`}
        >
          {id == 1 ? "Sipariş Aktarımı" : "Stok - Fiyat Eşitleme"}
        </h4>
        <Link to={toUrl}>
          <img
            className="w-[14px] h-[14px]"
            src={settingsSvg}
            alt="settingsSvg"
          />
        </Link>
      </div>
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
