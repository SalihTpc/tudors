import { Button, Form, Input } from "antd";
import saveSvg from "../../assets/icons/save.svg";
import checkSvg from "../../assets/icons/check.svg";

const Smtp = () => {
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
          <p className="text-sm font-inter">SMTP Mail Server IP</p>
        </div>
        <Form.Item name="webServiceAdress" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Giden SMTP Port</p>
        </div>
        <Form.Item name="wbyetkiKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">SMTP User Name</p>
        </div>
        <Form.Item name="sqlserverIp" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">SMTP Password</p>
        </div>
        <Form.Item name="sqlserverPort" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="mt-4 mb-6 flex items-center justify-start">
        <img className="w-6 h-6" src={checkSvg} alt={checkSvg} />
        <p className="text-xs font-inter">SSL Aktif</p>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Sipariş Aktarım hata alıcısı</p>
        </div>
        <Form.Item name="wbyetkiKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">
            Stok - Fiyat güncelleme hata alıcısı
          </p>
        </div>
        <Form.Item name="sqlserverIp" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Kargo eşitleme hata alıcısı</p>
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
        <p className="font-medium text-base font-inter">Kaydet</p>
      </Button>
    </Form>
  );
};

export default Smtp;
