import { Button, Form, Select, Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { useState } from "react";
import generalsApi from "../api/generals.api";
import downSvg from "../assets/icons/dropDown.svg";
import { orderStatus } from "../lib/generalValues";
import { Notification, NotificationType } from "../lib/notification.lib";

interface DataType {
  key: React.Key;
  adiSoyadi: string;
  duzenlemeTarihi: number;
  siparisTarihi: string;
  toplamTutar: number;
  paraBirimi: string;
  tutar: number;
  toplamKdv: number;
  siparisToplamTutari: number;
  id: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Adı Soyadı",
    dataIndex: "adiSoyadi",
  },
  {
    title: "Sipariş Tarih-Saati",
    dataIndex: "siparisTarihi",
    render: (text) => <p>{dayjs(text).format("HH:mm:ss - DD/MM/YYYY")}</p>,
  },
  {
    title: "Düzenleme Tarihi",
    dataIndex: "duzenlemeTarihi",
    render: (text) => <p>{dayjs(text).format("HH:mm:ss - DD/MM/YYYY")}</p>,
  },
  {
    title: "Para Birimi",
    dataIndex: "paraBirimi",
  },
  {
    title: "Tutar",
    dataIndex: "tutar",
  },
  {
    title: "Toplam Tutar",
    dataIndex: "toplamTutar",
  },
  {
    title: "Toplam KDV",
    dataIndex: "toplamKdv",
  },
  {
    title: "Sipariş Toplam Tutarı",
    dataIndex: "siparisToplamTutari",
  },
];

const ManuelTransfer = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data, setData] = useState<DataType[]>([]);
  const [selectedSiparisIds, setSelectedSiparisIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onSelectChange = (
    newSelectedRowKeys: React.Key[],
    selectedRows: DataType[]
  ) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    const selectedIds = selectedRows.map((row) => row.id);
    setSelectedSiparisIds(selectedIds);
    setSelectedRowKeys(newSelectedRowKeys);
    // console.log(selectedIds);
    // console.log(selectedIds, newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    // getCheckboxProps: (record: DataType) => ({
    //   disabled: record.state === 1,
    // }),
  };

  const aktarHandler = async () => {
    try {
      await generalsApi.siparisAktar({ siparisId: selectedSiparisIds });
      message.success("Siparişler Aktarıldı.");
    } catch (error: any) {
      Notification({
        type: NotificationType.Error,
        message: error,
      });
    }
  };

  const onFinish = async (values: any) => {
    // console.log(values.orderStatus || null);
    setLoading(true);
    try {
      const response = await generalsApi.getSiparisFromTicimax({
        siparisDurumu: values.orderStatus || null,
      });
      setData(
        response.map((data: any) => ({
          ...data,
          key: data.id.toString(),
        }))
      );
      message.success("Siparişler alındı.");
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

  //   useEffect(() => {
  //     initialAction();
  //     return () => {};
  //   }, []);

  return (
    <>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <div className="flex items-center justify-start [&>*]:mr-16 flex-wrap">
          <Form.Item name="orderStatus" className="w-[273px] h-[35px] my-3">
            <Select
              bordered={false}
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              allowClear
              options={orderStatus}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Sipariş Durumu"
            />
          </Form.Item>
        </div>
        <div className="mt-4">
          <Button
            className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AE3D0] rounded-md mr-4 font-inter"
            htmlType="submit"
          >
            Listele
          </Button>
          <Button
            onClick={aktarHandler}
            disabled={!selectedSiparisIds.length}
            className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AC9E3] rounded-md font-inter"
          >
            Seçilenleri Manual Aktar
          </Button>
        </div>
      </Form>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        loading={loading}
        className="font-inter mt-8"
      />
    </>
  );
};

export default ManuelTransfer;
