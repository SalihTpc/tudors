import { Form, Input, Select, Spin } from "antd";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import downSvg from "../../../assets/icons/dropDown.svg";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import { PaymentDataType } from "./Payment";
import { Notification, NotificationType } from "../../../lib/notification.lib";

type Props = {
  save: (values: any) => {};
  paymentInfos: PaymentDataType;
};

const PaymentForm = forwardRef(({ save, paymentInfos }: Props, ref) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const orderSources: string[] = useAppSelector(
    (state: RootState) => state.status.orderSources
  );
  const paymentStatus: string[] = useAppSelector(
    (state: RootState) => state.status.paymentStatus
  );

  useImperativeHandle(ref, () => ({
    submit() {
      form.submit();
    },
    resetFields() {
      form.resetFields();
    },
  }));
  const onFinish = (values: any) => {
    // console.log("Success:", values);
    values.paymentParametersId = paymentInfos.paymentParametersId;
    save(values);
  };

  const getInitialInfo = async () => {
    setLoading(true);
    if (paymentInfos.paymentParametersId > 0) {
      form.setFieldsValue({
        siprarisKaynagi: paymentInfos?.siprarisKaynagi,
        ticimaxOdemeTipi: paymentInfos?.ticimaxOdemeTipi,
        nebimOdemeTipi: paymentInfos?.nebimOdemeTipi,
        nebimOdemeKodu: paymentInfos?.nebimOdemeKodu,
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

  useEffect(() => {
    getInitialInfo();

    return () => {};
  }, [paymentInfos.paymentParametersId]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center mb-3">
          <Spin spinning={loading} tip="Yükleniyor..." size="large">
            <div className="p-12 bg-gray-300 rounded-lg" />
          </Spin>
        </div>
      ) : (
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
            <Form.Item
              name="siprarisKaynagi"
              className="mb-0 w-[300px] h-[35px]"
            >
              <Select
                bordered={false}
                allowClear
                suffixIcon={<img src={downSvg} />}
                className="bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none"
              >
                {orderSources.map((source, index) => (
                  <Select.Option key={index} value={source}>
                    {source}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className="flex mb-2">
            <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
              <p className="text-sm font-inter">Ticimax Ödeme Tipi Seç</p>
            </div>
            <Form.Item
              name="ticimaxOdemeTipi"
              className="mb-0 w-[300px] h-[35px]"
            >
              <Select
                bordered={false}
                allowClear
                suffixIcon={<img src={downSvg} />}
                className="bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none"
              >
                {paymentStatus.map((status, index) => (
                  <Select.Option key={index} value={status}>
                    {status}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className="flex mb-2">
            <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
              <p className="text-sm font-inter">Nebim Ödeme Tipi Seç</p>
            </div>
            {/* <Form.Item name="nebimOdemeTipi" className="mb-0">
              <Input
                bordered={false}
                // suffixIcon={<img src={downSvg} />}
                className="bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none"
              />
            </Form.Item> */}
            <Form.Item name="nebimOdemeTipi" className="mb-0">
              <Input className="w-[300px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
            </Form.Item>
          </div>
          <div className="flex mb-2">
            <div className="w-[285px] h-[35px] bg-[#F0F0F0] flex items-center justify-start pl-5 mr-4 border-[0.2px] border-black">
              <p className="text-sm font-inter">Nebim Ödeme Kodu Yaz</p>
            </div>
            <Form.Item name="nebimOdemeKodu" className="mb-0">
              <Input className="w-[300px] h-[35px] bg-white flex items-center justify-center border-[0.2px] border-black text-sm font-inter rounded-none" />
            </Form.Item>
          </div>
        </Form>
      )}
    </>
  );
});

export default PaymentForm;
