import checkSvg from "../assets/icons/check.svg";
import saveSvg from "../assets/icons/save.svg";
import { option, orderStatus } from "../lib/generalValues";
import TimeDateSelection from "./TimeDateSelection";
import { Button, Form, Select } from "antd";
import downSvg from "../assets/icons/dropDown.svg";
import { useState } from "react";
import dayjs from "dayjs";

const TransferConditions = () => {
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(dayjs().toISOString());
  const [selectedTime, setSelectedTime] = useState(dayjs("00:00", "HH:mm"));

  const options: option[] = [
    { label: "Seçenek 1", value: 1 },
    { label: "Seçenek 2", value: 2 },
    { label: "Seçenek 3", value: 3 },
  ];
  const timeOptions: option[] = [
    { label: "1dk", value: 60 },
    { label: "3dk", value: 180 },
    { label: "5dk", value: 300 },
    { label: "10dk", value: 600 },
    { label: "15dk", value: 900 },
    { label: "30dk", value: 1800 },
  ];

  const onFinish = (values: any) => {
    values.time = selectedTime;
    values.date = selectedDate;
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="my-4 mx-48 font-inter">
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <div className="flex items-center justify-start mt-8 [&>*]:mr-16 flex-wrap">
          <Form.Item name="orderStatus" className="w-[273px] h-[35px] my-3">
            <Select
              bordered={false}
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={orderStatus}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Sipariş Durumu"
            />
          </Form.Item>
          <Form.Item
            name="deliverTransferStatus"
            className="w-[273px] h-[35px] my-3"
          >
            <Select
              bordered={false}
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={options}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Kargo Aktarım Durumu"
            />
          </Form.Item>
          <Form.Item name="orderTimeStatus" className="w-[273px] h-[35px] my-3">
            <Select
              bordered={false}
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
        <div className="flex items-center justify-start mt-6">
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
        </div>
      </Form>
    </div>
  );
};

export default TransferConditions;
