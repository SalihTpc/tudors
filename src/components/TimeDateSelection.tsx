import dayjs from "dayjs";
import { useState } from "react";
import dateSvg from "../assets/icons/date.svg";
import timeSvg from "../assets/icons/time.svg";
import DateSelectorModal from "./DateSelectorModal";
import TimeSelector from "./TimeSelector";

const TimeDateSelection = () => {
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
    setSelectedTime(dayjs(e.format("HH:mm"), "HH:mm"));
    setShowTimeModal(false);
  };
  return (
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
      <div className="w-full relative top-8">
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
    </div>
  );
};

export default TimeDateSelection;
