import { useState } from "react";
import dateSvg from "../assets/icons/date.svg";
import timeSvg from "../assets/icons/time.svg";
import DateSelectorModal from "./DateSelectorModal";
import TimeSelector from "./TimeSelector";

type Props = {
  selectedDate: any;
  setSelectedDate: Function;
  selectedTime: any;
  setSelectedTime: Function;
};

const TimeDateSelection = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  const handleDateChange = (e: any) => {
    if (e?.$d.toISOString()) {
      setSelectedDate(e?.$d.toISOString());
      setShowModal(false);
    }
  };

  const handleTimeChange = (e: any) => {
    setSelectedTime(e.format("HH:mm"));
    setShowTimeModal(false);
  };
  return (
    <div className="my-10">
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
