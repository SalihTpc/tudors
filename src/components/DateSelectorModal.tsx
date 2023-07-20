import { DatePicker } from "antd";
import dayjs from "dayjs";

interface DateSelectorModalProps {
  selectedDate: string;
  handleDateChange: Function;
}

const DateSelectorModal: React.FC<DateSelectorModalProps> = ({
  selectedDate,
  handleDateChange,
}) => {
  return (
    <div className="absolute -top-7 -left-6 rounded-md">
      <DatePicker
        value={dayjs(selectedDate)}
        onChange={(e) => handleDateChange(e)}
      />
    </div>
  );
};

export default DateSelectorModal;
