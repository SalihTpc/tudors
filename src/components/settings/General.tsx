import { Button, Form, Input } from "antd";
import saveSvg from "../../assets/icons/save.svg";
import { useEffect } from "react";
import settingsApi from "../../api/settings.api";
import { Notification, NotificationType } from "../../lib/notification.lib";

const General = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    webServiceAdress?: string;
    wbyetkiKodu?: string;
    sqlserverIp?: string;
    sqlserverPort?: string;
    sqlserverUserName?: string;
    sqlserverPassword?: string;
    dbname?: string;
    nebimMagazaKodu?: string;
    nebimKullaniciAdi?: string;
    nebimPassword?: string;
    nebimOfisKodu?: string;
    nebimUserGroupKodu?: string;
    nebimDepoKodu?: string;
  };

  const intialAction = async () => {
    try {
      const response: FieldType[] = await settingsApi.generalParams();
      form.setFieldsValue({
        webServiceAdress: response[0].webServiceAdress,
        wbyetkiKodu: response[0].wbyetkiKodu,
        sqlserverIp: response[0].sqlserverIp,
        sqlserverPort: response[0].sqlserverUserName,
        sqlserverUserName: response[0].sqlserverUserName,
        sqlserverPassword: response[0].sqlserverPassword,
        dbname: response[0].dbname,
        nebimMagazaKodu: response[0].nebimMagazaKodu,
        nebimKullaniciAdi: response[0].nebimKullaniciAdi,
        nebimPassword: response[0].nebimPassword,
        nebimOfisKodu: response[0].nebimOfisKodu,
        nebimUserGroupKodu: response[0].nebimUserGroupKodu,
        nebimDepoKodu: response[0].nebimDepoKodu,
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
          <p className="text-sm font-inter">Ticimax Web Service Adresi</p>
        </div>
        <Form.Item<FieldType> name="webServiceAdress" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Ticimax WB Yetki Kodu</p>
        </div>
        <Form.Item<FieldType> name="wbyetkiKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors SQL Server IP</p>
        </div>
        <Form.Item<FieldType> name="sqlserverIp" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors SQL Server Port</p>
        </div>
        <Form.Item<FieldType> name="sqlserverPort" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors SQL Server User Name</p>
        </div>
        <Form.Item<FieldType> name="sqlserverUserName" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors SQL Server Password</p>
        </div>
        <Form.Item<FieldType> name="sqlserverPassword" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors DB Name</p>
        </div>
        <Form.Item<FieldType> name="dbname" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors Nebim Mağaza Kodu</p>
        </div>
        <Form.Item<FieldType> name="nebimMagazaKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors Nebim Kullanıcı Adı</p>
        </div>
        <Form.Item<FieldType> name="nebimKullaniciAdi" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors Nebim Mağaza Şifresi</p>
        </div>
        <Form.Item<FieldType> name="nebimPassword" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors Nebim Ofis Kodu</p>
        </div>
        <Form.Item<FieldType> name="nebimOfisKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors Nebim User Group Kodu</p>
        </div>
        <Form.Item<FieldType> name="nebimUserGroupKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Tudors Nebim Depo Kodu</p>
        </div>
        <Form.Item<FieldType> name="nebimDepoKodu" className="mb-0">
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

export default General;
