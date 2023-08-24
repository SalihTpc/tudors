import checkSvg from "../assets/icons/check.svg";
import saveSvg from "../assets/icons/save.svg";
import ConditionSelect from "./ConditionSelect";
import TimeDateSelection from "./TimeDateSelection";

const TransferConditions = () => {
  const options: string[] = ["Seçenek 1", "Seçenek 2", "Seçenek 3"];
  const timeOptions: string[] = ["1dk", "3dk", "5dk", "10dk", "15dk", "30dk"];

  return (
    <div className="my-4 mx-48 font-inter">
      <div className="flex items-center justify-start mt-8 [&>*]:mr-24">
        <ConditionSelect defOption={"Sipariş Durumu"} options={options} />
        <ConditionSelect defOption={"Kargo Aktarım Durumu"} options={options} />
        <ConditionSelect
          defOption={"Sipariş Aktarım Zamanlaması"}
          options={timeOptions}
        />
      </div>
      <TimeDateSelection />
      <button className=" text-base flex items-center justify-center">
        <img className="w-[40px] h-[40px]" src={saveSvg} alt={saveSvg} />
        <span>Kaydet</span>
      </button>
      <div className="flex items-center justify-start mt-6">
        <img src={checkSvg} alt={checkSvg} />
        <p className="text-[12px]/[15.6px]">
          Aktarılmış siparişler listelensin mi? ( Son 7 güne aitler listelenir )
        </p>
      </div>
      <div className="mt-5">
        <button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AE3D0] rounded-md mr-4 ">
          Listele
        </button>
        <button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AC9E3] rounded-md">
          Seçilenleri Manual Aktar
        </button>
      </div>
    </div>
  );
};

export default TransferConditions;
