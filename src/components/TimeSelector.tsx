import { TimePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface TimeSelectorProps {
  selectedDate: Dayjs | null;
  handleDateChange: Function;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedDate,
  handleDateChange,
}) => {
  return (
    <div className="absolute -top-7 left-32 rounded-md w-full">
      <TimePicker
        showNow={false}
        format="HH:mm"
        value={dayjs(selectedDate)}
        onChange={(e) => {
          handleDateChange(e);
        }}
      />
    </div>
  );
};

export default TimeSelector;
