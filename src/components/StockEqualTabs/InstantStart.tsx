import { Button, Form, Select, Spin, message } from "antd";
import { useState } from "react";
import downSvg from "../../assets/icons/dropDown.svg";
import productApi from "../../api/product.api";
import { option } from "../../lib/generalValues";
import { Notification, NotificationType } from "../../lib/notification.lib";
import saveSvg from "../../assets/icons/save.svg";

const InstantStart = () => {
  const [form] = Form.useForm();
  //   const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);

  type FieldType = {
    duration?: number;
  };

  const timeOptions: option[] = [
    { label: "6 sa", value: 6 },
    { label: "12 sa", value: 12 },
    { label: "18 sa", value: 18 },
    { label: "24 sa", value: 24 },
  ];

  const onFinish = async (values: any) => {
    setLoading(true);
    // console.log(values);
    try {
      await productApi.startJobNov(values);
      message.success("Stok - Fiyat Eşitleme Anlık Çalıştırıldı.");
    } catch (error: any) {
      Notification({
        type: NotificationType.Error,
        message: error,
      });
    }
    setLoading(false);
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
    <>
      {loading && (
        <div className="flex items-center justify-center min-w-full min-h-full">
          <Spin tip="Loading..." size="large">
            <div className="p-12 bg-gray-300 rounded-lg" />
          </Spin>
        </div>
      )}
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <div className="flex items-center justify-start [&>*]:mr-16 flex-wrap">
          <Form.Item<FieldType>
            name="duration"
            className="w-[273px] h-[35px] my-3"
          >
            <Select
              bordered={false}
              allowClear
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={timeOptions}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Saat Seçiniz"
            />
          </Form.Item>
        </div>
        <Button
          className="w-fit h-fit mb-3 mt-3 flex items-center justify-center"
          type="text"
          htmlType="submit"
        >
          <img src={saveSvg} alt="save" />
          <p className="font-medium text-base font-inter">Kaydet</p>
        </Button>
      </Form>
    </>
  );
};

export default InstantStart;
