import { DatePicker, Form } from "antd";
import dateSvg from "../assets/icons/date.svg";

const TransferStop = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    // values.time = selectedTime;
    console.log(values);
    // console.log("Success:", values.orderStatus.$d.toISOString());
    // dispatch(setStockEqualSave(values.orderStatus.$d.toISOString()));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <div className="mt-10 font-inter">
        <h4 className="text-sm">
          Aşağıdaki tarih ve saatte sipariş aktarımını otomatik durdur.
        </h4>
      </div>
      <Form.Item
        name="orderStatus"
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
    </Form>
  );
};

export default TransferStop;
