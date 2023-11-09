import type { TimeRangePickerProps } from "antd";
import { Button, DatePicker, Form, Select, Spin, Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { useState } from "react";
import generalsApi from "../api/generals.api";
import checkSvg from "../assets/icons/check.svg";
import downSvg from "../assets/icons/dropDown.svg";
import { aktarimStatus } from "../lib/generalValues";
import { Notification, NotificationType } from "../lib/notification.lib";

interface DataType {
  key: React.Key;
  siparisKaynagi: string;
  siparisId: number;
  siparisTarihi: string;
  toplamTutar: number;
  siparisDurumu: string;
  state: number;
  id: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "",
    dataIndex: "id",
  },
  {
    title: "Aktarım Durumu",
    dataIndex: "state",
    render: (text) => <p>{text == 1 ? "Aktarıldı" : "Aktarılmadı"}</p>,
  },
  {
    title: "Sipariş Kaynağı",
    dataIndex: "siparisKaynagi",
  },
  {
    title: "Sipariş ID",
    dataIndex: "siparisId",
  },
  {
    title: "Sipariş Tarih-Saati",
    dataIndex: "siparisTarihi",
    render: (text) => <p>{dayjs(text).format("HH:mm:ss - DD/MM/YYYY")}</p>,
  },
  {
    title: "Toplam Tutar",
    dataIndex: "toplamTutar",
  },
  {
    title: "Sipariş Durumu",
    dataIndex: "siparisDurumu",
  },
];

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Next 7 Days", value: [dayjs(), dayjs().add(7, "d")] },
  { label: "Next 14 Days", value: [dayjs(), dayjs().add(14, "d")] },
  { label: "Prev 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Prev 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
];

const List = () => {
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data, setData] = useState<DataType[]>([]);
  const [selectedSiparisIds, setSelectedSiparisIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const onSelectChange = (
    newSelectedRowKeys: React.Key[],
    selectedRows: DataType[]
  ) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    const selectedIds = selectedRows.map((row) => row.siparisId);
    setSelectedSiparisIds(selectedIds);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record: DataType) => ({
      disabled: record.state === 1,
    }),
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    // console.log("Success:", values);
    if (values.tarih) {
      values.basTarih = values.tarih[0].$d.toISOString();
      values.bitTarih = values.tarih[1].$d.toISOString();
      delete values.tarih;
    } else {
      delete values.tarih;
    }
    !values.state && delete values.state;
    // console.log(values);

    try {
      const response = await generalsApi.getSiparisler(values);
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
    form.resetFields();
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

  return (
    <>
      <div className="hidden items-center justify-start mt-6">
        <img src={checkSvg} alt={checkSvg} />
        <p className="text-[12px]/[15.6px] font-inter">
          Aktarılmış siparişler listelensin mi? ( Son 7 güne aitler listelenir )
        </p>
      </div>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <div className="flex items-center justify-start mt-3 [&>*]:mr-16 flex-wrap">
          <Form.Item
            name="tarih"
            className="w-[400px] h-[35px] my-3 bg-tudorsGray"
            // rules={[
            //   {
            //     required: true,
            //     message: "Başlangıç ve Bitiş tarihlerini seçin!",
            //   },
            // ]}
          >
            <DatePicker.RangePicker
              className="w-full h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              showTime={{ format: "HH:mm" }}
              format="DD-MM-YYYY HH:mm"
              placeholder={["Başlangış Tarihi", "Bitiş Tarihi"]}
              suffixIcon={<img src={downSvg} />}
              presets={rangePresets}
            />
          </Form.Item>
          <Form.Item
            name="state"
            className="w-[273px] h-[35px] my-3"
            // rules={[{ required: true, message: "Aktarım durumunu seçin!" }]}
          >
            <Select
              bordered={false}
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              allowClear
              options={aktarimStatus}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Aktarım Durumu"
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
      {data.length > 0 ? (
        loading ? (
          <div className="flex items-center justify-center min-w-screen min-h-screen">
            <Spin tip="Loading..." size="large">
              <div className="p-12 bg-gray-300 rounded-lg" />
            </Spin>
          </div>
        ) : (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            loading={loading}
            className="font-inter mt-8"
          />
        )
      ) : null}
    </>
  );
};

export default List;
