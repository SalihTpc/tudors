import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import settingsApi from "../../../api/settings.api";
import UpdateModal from "./UpdateModal";

export interface PaymentDataType {
  key?: React.Key;
  siprarisKaynagi?: string;
  ticimaxOdemeTipi?: string;
  nebimOdemeTipi?: number;
  nebimOdemeKodu?: string;
  paymentParametersId: number;
  ticimaxOdemeTipiId?: string;
}
const initialState: PaymentDataType = {
  siprarisKaynagi: "",
  ticimaxOdemeTipi: "",
  nebimOdemeTipi: 0,
  nebimOdemeKodu: "",
  paymentParametersId: 0,
  ticimaxOdemeTipiId: "",
};

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PaymentDataType[]>([]);
  const [paymentInfos, setPaymentInfos] = useState(initialState);
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState<Number>(0);

  const initialAction = async () => {
    setLoading(true);
    try {
      const response = await settingsApi.getPaymentParams();
      setData(
        response.map((data: PaymentDataType) => ({
          ...data,
          key: data.paymentParametersId.toString(),
        }))
      );
    } catch (error) {}

    setLoading(false);
  };

  const updateHandler = (info: PaymentDataType) => {
    setPaymentInfos(info);
    setModalVisible(true);
  };

  const columns: ColumnsType<PaymentDataType> = [
    {
      title: "ID",
      dataIndex: "paymentParametersId",
    },
    {
      title: "Ticimax Sipariş Kaynağı",
      dataIndex: "siprarisKaynagi",
    },
    {
      title: "Ticimax Ödeme Tipi",
      dataIndex: "ticimaxOdemeTipi",
    },

    {
      title: "Nebim Ödeme Tipi",
      dataIndex: "nebimOdemeTipi",
    },
    {
      title: "Nebim Ödeme Kodu",
      dataIndex: "nebimOdemeKodu",
    },
    {
      title: "Güncelle",
      render: (_, record) => (
        <Button
          size="middle"
          type="primary"
          onClick={() => updateHandler(record)}
        >
          Güncelle
        </Button>
      ),
    },
  ];

  useEffect(() => {
    initialAction();

    return () => {
      setData([]);
    };
  }, [count]);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        className="font-inter mt-8"
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
        }}
      />
      <UpdateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        paymentInfos={paymentInfos}
        setCount={setCount}
      />
    </>
  );
};

export default Payment;
