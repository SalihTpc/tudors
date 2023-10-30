import { Button, Form, Input, message } from "antd";
import saveSvg from "../../assets/icons/save.svg";
import settingsApi from "../../api/settings.api";
import { Notification, NotificationType } from "../../lib/notification.lib";
import { Store } from "antd/lib/form/interface";
import { useEffect } from "react";

const Special = () => {
  const [form] = Form.useForm();
  type FieldType = {
    specialParametersId?: number;
    kapidaOdemeKodu?: string;
    hediyePaketiKodu?: string;
    sqlserverPort?: string;
    bankaKomisyonKodu?: string;
    kargoUcretiKodu?: string;
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
      await settingsApi.updateSpecialParams(sanitizedValues);
      message.success("Özel Parametreler güncellendi.");
      intialAction();
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
      const response: FieldType[] = await settingsApi.getSpecialParams();
      form.setFieldsValue({
        kapidaOdemeKodu: response[0].kapidaOdemeKodu,
        hediyePaketiKodu: response[0].hediyePaketiKodu,
        bankaKomisyonKodu: response[0].bankaKomisyonKodu,
        kargoUcretiKodu: response[0].kargoUcretiKodu,
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
          <p className="text-sm font-inter">Kapıda Ödeme Ürün Kodu / Nebim</p>
        </div>
        <Form.Item<FieldType> name="kapidaOdemeKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Hediye Paketi Ürün Kodu / Nebim</p>
        </div>
        <Form.Item<FieldType> name="hediyePaketiKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Banka Kamisyon Ürün Kodu / Nebim</p>
        </div>
        <Form.Item<FieldType> name="bankaKomisyonKodu" className="mb-0">
          <Input className="w-[242px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
        </Form.Item>
      </div>
      <div className="flex mb-2">
        <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
          <p className="text-sm font-inter">Kargo ücreti ürün kodu / Nebim</p>
        </div>
        <Form.Item<FieldType> name="kargoUcretiKodu" className="mb-0">
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

export default Special;
