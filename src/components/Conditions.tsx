import ConditionSelect from "./ConditionSelect";
import dateSvg from "../assets/icons/date.svg";
import timeSvg from "../assets/icons/time.svg";
import saveSvg from "../assets/icons/save.svg";
import checkSvg from "../assets/icons/check.svg";
import { useState, useEffect } from "react";
import DateSelectorModal from "./DateSelectorModal";
import dayjs from "dayjs";
import TimeSelector from "./TimeSelector";

const Conditions = () => {
  const options: string[] = ["Seçenek 1", "Seçenek 2", "Seçenek 3"];
  const timeOptions: string[] = ["1dk", "3dk", "5dk", "10dk", "15dk", "30dk"];

  const [selectedDate, setSelectedDate] = useState(dayjs().toISOString());
  const [selectedTime, setSelectedTime] = useState(dayjs("00:00", "HH:mm"));
  const [showModal, setShowModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  const handleDateChange = (e: any) => {
    if (e?.$d.toISOString()) {
      setSelectedDate(e?.$d.toISOString());
      setShowModal(false);
    }
  };

  const handleTimeChange = (e: any) => {
    console.log(e.format("HH:mm"));
    setSelectedTime(dayjs(e.format("HH:mm"), "HH:mm"));
    setShowTimeModal(false);
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <div className="my-4 mx-48">
      <div>
        <div>
          <h2 className="text-xl mb-3">Şartlar</h2>
          <hr className="border border-solid border-black" />
        </div>
        <div className="flex items-center justify-start mt-14 [&>*]:mr-24">
          <ConditionSelect defOption={"Sipariş Durumu"} options={options} />
          <ConditionSelect
            defOption={"Kargo Aktarım Durumu"}
            options={options}
          />
          <ConditionSelect
            defOption={"Sipariş Aktarım Zamanlaması"}
            options={timeOptions}
          />
        </div>
        <div className="my-8">
          <h4 className="text-sm mb-2">
            Aşağıdaki tarih ve saatte sipariş aktarımını otomatik durdur.
          </h4>
          <div className="flex justify-start items-center [&>*]:mr-12">
            <div
              className="flex justify-center items-center [&>*]:mr-2 cursor-pointer"
              onClick={() => setShowModal((state) => !state)}
            >
              <img src={dateSvg} alt={dateSvg} />
              <span className="text-sm">Tarih Seç</span>
            </div>
            <div
              className="flex justify-center items-center [&>*]:mr-2 cursor-pointer"
              onClick={() => setShowTimeModal((state) => !state)}
            >
              <img src={timeSvg} alt={timeSvg} />
              <span className="text-sm">Saat Seç</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        {showModal && (
          <DateSelectorModal
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        )}
        {showTimeModal && (
          <TimeSelector
            selectedDate={selectedTime}
            handleDateChange={handleTimeChange}
          />
        )}
      </div>
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

export default Conditions;
