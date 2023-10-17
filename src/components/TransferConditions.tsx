import { Button, Form, Select } from "antd";
import generalsApi from "../api/generals.api";
import downSvg from "../assets/icons/dropDown.svg";
import saveSvg from "../assets/icons/save.svg";
import { option, orderStatus } from "../lib/generalValues";
import { setOrderTransferSave } from "../store/features/status/status.slice";
import { useAppDispatch } from "../store/hooks";
import TransferStop from "./TransferStop";

const TransferConditions = () => {
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  const timeOptions: option[] = [
    { label: "1dk", value: 1 },
    { label: "3dk", value: 3 },
    { label: "5dk", value: 5 },
    { label: "10dk", value: 10 },
    { label: "15dk", value: 15 },
    { label: "30dk", value: 30 },
  ];

  const onFinish = async (values: any) => {
    // console.log("Success:", values);
    dispatch(setOrderTransferSave(values));
    try {
      await generalsApi.saveServiceCriteria({
        serviceId: 1,
        duration: values.orderTimeStatus,
        siparisDurumu: values.orderStatus,
      });
    } catch (error) {}
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
        <Button
          className="w-fit h-fit mb-3 mt-6 flex items-center justify-center"
          type="text"
          htmlType="submit"
        >
          <img src={saveSvg} alt="save" />
          <p className="font-medium text-base font-inter">Kaydet</p>
        </Button>
      </Form>
      <TransferStop />
    </div>
  );
};

export default TransferConditions;
