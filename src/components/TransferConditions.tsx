import { Button, Form, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import downSvg from "../assets/icons/dropDown.svg";
import saveSvg from "../assets/icons/save.svg";
import { option, orderStatus } from "../lib/generalValues";
import { setOrderTransferSave } from "../store/features/status/status.slice";
import { useAppDispatch } from "../store/hooks";
import TimeDateSelection from "./TimeDateSelection";

const TransferConditions = () => {
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(dayjs().toISOString());
  const [selectedTime, setSelectedTime] = useState(dayjs("00:00", "HH:mm"));
  const dispatch = useAppDispatch();

  const timeOptions: option[] = [
    { label: "1dk", value: 1 },
    { label: "3dk", value: 3 },
    { label: "5dk", value: 5 },
    { label: "10dk", value: 10 },
    { label: "15dk", value: 15 },
    { label: "30dk", value: 30 },
  ];

  const onFinish = (values: any) => {
    // console.log("Success:", values);
    dispatch(setOrderTransferSave(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="">
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <div className="flex items-center justify-start mt-8 [&>*]:mr-16 flex-wrap">
          <Form.Item name="orderStatus" className="w-[273px] h-[35px] my-3">
            <Select
              bordered={false}
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              allowClear
              options={orderStatus}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Sipariş Durumu"
            />
          </Form.Item>
          <Form.Item name="orderTimeStatus" className="w-[273px] h-[35px] my-3">
            <Select
              bordered={false}
              allowClear
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={timeOptions}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Sipariş Aktarım Zamanlaması"
            />
          </Form.Item>
        </div>
        <TimeDateSelection
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
        />
        <Button
          className="w-fit h-fit mb-3 flex items-center justify-center"
          type="text"
          htmlType="submit"
        >
          <img src={saveSvg} alt="save" />
          <p className="font-medium text-base font-inter">Kaydet</p>
        </Button>
        {/* <div className="flex items-center justify-start mt-6">
          <img src={checkSvg} alt={checkSvg} />
          <p className="text-[12px]/[15.6px] font-inter">
            Aktarılmış siparişler listelensin mi? ( Son 7 güne aitler listelenir
            )
          </p>
        </div>
        <div className="mt-5">
          <button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AE3D0] rounded-md mr-4 font-inter">
            Listele
          </button>
          <button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AC9E3] rounded-md font-inter">
            Seçilenleri Manual Aktar
          </button>
        </div> */}
      </Form>
    </div>
  );
};

export default TransferConditions;
