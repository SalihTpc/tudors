import { Button, Form, Input, message } from "antd";
import saveSvg from "../../assets/icons/save.svg";
import checkSvg from "../../assets/icons/check.svg";
import settingsApi from "../../api/settings.api";
import { Notification, NotificationType } from "../../lib/notification.lib";
import { Store } from "antd/lib/form/interface";
import { useEffect } from "react";

const Smtp = () => {
  const [form] = Form.useForm();
  type FieldType = {
    smtpparametersId?: number;
    mailServerIp?: string;
    smtpPort?: string;
    smtpUserName?: string;
    smtpPassword?: string;
    siparisHata?: string;
    stokFiyatHata?: string;
    kargoHata?: string;
  };

  const onFinish = async (values: any) => {
    // console.log("Success:", values);
    const sanitizedValues = Object.entries(values).reduce(
      (acc, [key, value]) => {
        acc[key] = value == (undefined || "") ? null : value;
        return acc;
      },
      {} as Store
    );

    // console.log(sanitizedValues);
    try {
      await settingsApi.updateSmtpParams(sanitizedValues);
      message.success("Smtp Parametreler güncellendi.");
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

  const intialAction = async () => {
    try {
      const response: FieldType[] = await settingsApi.getSmtpParams();
      form.setFieldsValue({
        mailServerIp: response[0].mailServerIp,
        smtpPort: response[0].smtpPort,
        smtpUserName: response[0].smtpUserName,
        smtpPassword: response[0].smtpPassword,
        siparisHata: response[0].siparisHata,
        stokFiyatHata: response[0].stokFiyatHata,
        kargoHata: response[0].kargoHata,
      });
    } catch (error: any) {
      Notification({
        type: NotificationType.Error,
        message: error,
      });
    }
  };

  useEffect(() => {
    intialAction();

    return () => {
      form.resetFields();
    };
  }, []);

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
        <Form.Item<FieldType> name="mailServerIp" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Giden SMTP Port</p>
        </div>
        <Form.Item<FieldType> name="smtpPort" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">SMTP User Name</p>
        </div>
        <Form.Item<FieldType> name="smtpUserName" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">SMTP Password</p>
        </div>
        <Form.Item<FieldType> name="smtpPassword" className="mb-0">
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
        <Form.Item<FieldType> name="siparisHata" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">
            Stok - Fiyat güncelleme hata alıcısı
          </p>
        </div>
        <Form.Item<FieldType> name="stokFiyatHata" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Kargo eşitleme hata alıcısı</p>
        </div>
        <Form.Item<FieldType> name="kargoHata" className="mb-0">
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
