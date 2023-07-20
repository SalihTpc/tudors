import Action from "./Action";
import playSvg from "../assets/icons/play.svg";
import stopSvg from "../assets/icons/stop.svg";

const Actions = () => {
  return (
    <div className="flex items-center justify-center my-10 [&>*]:mr-8">
      <Action
        title={"Sipariş Aktarımı"}
        icon={playSvg}
        action={"Running ( 04:14 )"}
        process1={"18"}
        process2={"2"}
        selected={false}
      />
      <Action
        title={"Kargo Entegrasyonu"}
        icon={stopSvg}
        action={"Stopped"}
        process1={"84"}
        process2={"0"}
        selected={false}
      />
      <Action
        title={"Stok - Fiyat Eşitleme"}
        icon={stopSvg}
        action={"Stopped"}
        process1={"145845"}
        process2={"0"}
        selected={false}
      />
    </div>
  );
};

export default Actions;
