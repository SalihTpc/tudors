import { Button, DatePicker, Form, Select, message } from "antd";
import dateSvg from "../assets/icons/date.svg";
import downSvg from "../assets/icons/dropDown.svg";
import saveSvg from "../assets/icons/save.svg";
import { option, orderStatus } from "../lib/generalValues";
import { Notification, NotificationType } from "../lib/notification.lib";
import { useAppDispatch } from "../store/hooks";
import { setOrderTransferSave } from "../store/features/status/status.slice";
import generalsApi from "../api/generals.api";

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
    // console.log(values);
    delete values.stopTime;
    dispatch(setOrderTransferSave(values));
    try {
      await generalsApi.saveServiceCriteria({
        serviceId: 1,
        duration: values.orderTimeStatus,
        siparisDurumu: values.orderStatus,
      });
      message.success("Sipariş kriterleri eklendi");
    } catch (error: any) {
      Notification({
        type: NotificationType.Error,
        message: error,
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    errorInfo.errorFields.forEach((field: any) => {
      Notification({
        type: NotificationType.Warning,
        message: `${field.errors[0]}`,
      });
    });
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
        <div className="mt-10 font-inter">
          <h4 className="text-sm">
            Aşağıdaki tarih ve saatte sipariş aktarımını otomatik durdur.
          </h4>
        </div>
        <Form.Item
          name="stopTime"
          className="w-[273px] h-[35px] mx-0 my-3 font-inter bg-tudorsGray text-black"
        >
          <DatePicker
            style={{
              color: "rgba(0, 0, 0, 1)",
            }}
            className="w-full"
            format="DD-MM-YYYY HH:mm"
            showTime
            placeholder="Tarih Saat Seç"
            bordered={false}
            suffixIcon={<img src={dateSvg} />}
          />
        </Form.Item>
        <Button
          className="w-fit h-fit mb-3 mt-6 flex items-center justify-center"
          type="text"
          htmlType="submit"
        >
          <img src={saveSvg} alt="save" />
          <p className="font-medium text-base font-inter">Kaydet</p>
        </Button>
      </Form>
    </div>
  );
};

export default TransferConditions;
