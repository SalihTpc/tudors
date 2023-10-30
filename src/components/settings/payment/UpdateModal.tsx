import { Button, message, Modal } from "antd";
import { useRef } from "react";
import settingsApi from "../../../api/settings.api";
import saveSvg from "../../../assets/icons/save.svg";
import { Notification, NotificationType } from "../../../lib/notification.lib";
import { PaymentDataType } from "./Payment";
import PaymentForm from "./PaymentForm";

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
  paymentInfos: PaymentDataType;
  setCount: Function;
};

const UpdateModal = ({
  modalVisible,
  setModalVisible,
  paymentInfos,
  setCount,
}: Props) => {
  const paymentFormRef: any = useRef();
  const submit = async () => {
    paymentFormRef.current.submit();
  };

  // console.log("selected:", selectedOid, "side:", sideOid);

  const cancel = () => {
    setModalVisible(false);
  };

  const save = async (values: any) => {
    // console.log("update:", values);

    try {
      await settingsApi.updatePaymentParams(values);
      setModalVisible(false);
      setCount((state: number) => state + 1);
      message.success("Ödeme güncellendi");
    } catch (error: any) {
      Notification({
        type: NotificationType.Error,
        message: error,
      });
    }
  };

  return (
    <Modal
      title="Güncelle"
      style={{ top: 20 }}
      open={modalVisible}
      width={700}
      maskClosable={false}
      onOk={() => submit()}
      onCancel={() => cancel()}
      footer={[
        <Button
          className="w-fit h-fit mb-3 flex items-center justify-center"
          type="text"
          key="submit"
          htmlType="submit"
          onClick={submit}
        >
          <img src={saveSvg} alt="save" />
          <p className="font-medium text-base">Kaydet</p>
        </Button>,
      ]}
    >
      <PaymentForm
        ref={paymentFormRef}
        paymentInfos={paymentInfos}
        save={save}
      />
    </Modal>
  );
};

export default UpdateModal;
