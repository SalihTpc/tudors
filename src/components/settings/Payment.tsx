import { Button, Form, Input, Select } from "antd";
import saveSvg from "../../assets/icons/save.svg";
import downSvg from "../../assets/icons/dropDown.svg";

const Payment = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Ticimax Sipariş Kaynağı Seç</p>
        </div>
        <Form.Item name="webServiceAdress" className="mb-0 w-[242px] h-[35px]">
          <Select
            bordered={false}
            suffixIcon={<img src={downSvg} />}
            className="bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none"
          />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Ticimax Ödeme Tipi Seç</p>
        </div>
        <Form.Item name="wbyetkiKodu" className="mb-0 w-[242px] h-[35px]">
          <Select
            bordered={false}
            suffixIcon={<img src={downSvg} />}
            className="bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none"
          />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Nebim Ödeme Tipi Seç</p>
        </div>
        <Form.Item name="sqlserverIp" className="mb-0 w-[242px] h-[35px]">
          <Select
            bordered={false}
            suffixIcon={<img src={downSvg} />}
            className="bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none"
          />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Nebim Ödeme Kodu Yaz</p>
        </div>
        <Form.Item name="sqlserverPort" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <Button
        className="w-fit h-fit mb-3 flex items-center justify-center"
        type="text"
        htmlType="submit"
      >
        <img src={saveSvg} alt="save" />
        <p className="font-medium text-base">Kaydet</p>
      </Button>
    </Form>
  );
};

export default Payment;
