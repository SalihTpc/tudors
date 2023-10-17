import { Button, DatePicker, Form, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import checkSvg from "../assets/icons/check.svg";
import downSvg from "../assets/icons/dropDown.svg";
import { aktarimStatus } from "../lib/generalValues";
import { useState } from "react";
import type { TimeRangePickerProps } from "antd";
import dayjs from "dayjs";
import generalsApi from "../api/generals.api";

interface DataType {
  key: React.Key;
  siparisKaynagi: string;
  siparisID: string;
  siparisTarihi: string;
  toplamTutar: string;
  siparisDurumu: string;
  nbStatu: string;
  kgStatu: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Sipariş Kaynağı",
    dataIndex: "siparisKaynagi",
  },
  {
    title: "Sipariş ID",
    dataIndex: "siparisID",
  },
  {
    title: "Sipariş Tarih-Saati",
    dataIndex: "siparisTarihi",
  },
  {
    title: "Toplam Tutar",
    dataIndex: "toplamTutar",
  },
  {
    title: "Sipariş Durumu",
    dataIndex: "siparisDurumu",
  },

  {
    title: "NB Statü",
    dataIndex: "nbStatu",
  },
  {
    title: "KG Statü",
    dataIndex: "kgStatu",
  },
];

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Next 7 Days", value: [dayjs(), dayjs().add(7, "d")] },
  { label: "Next 14 Days", value: [dayjs(), dayjs().add(14, "d")] },
  { label: "Next 30 Days", value: [dayjs(), dayjs().add(30, "d")] },
  { label: "Next 90 Days", value: [dayjs(), dayjs().add(90, "d")] },
];

const List = () => {
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const data = [
    {
      siparisKaynagi: "Trendyol",
      siparisID: "TRN484654684",
      siparisTarihi: "19.07.2023 - 18:43",
      toplamTutar: "699,00₺",
      siparisDurumu: "Onaylandı",
      nbStatu: "Beklemede",
      kgStatu: "Aktarıldı",
    },
    {
      siparisKaynagi: "Ticimax Web",
      siparisID: "54854884",
      siparisTarihi: "18.07.2023 - 18:43",
      toplamTutar: "499,00₺",
      siparisDurumu: "Onaylandı",
      nbStatu: "Aktarıldı",
      kgStatu: "Aktarıldı",
    },
  ];
  const myData: DataType[] = data.map((data, index) => ({
    ...data,
    key: index.toString(),
  }));

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record: DataType) => ({
      disabled: record.kgStatu === "Aktarıldı",
    }),
  };

  const onFinish = async (values: any) => {
    values.basTarih = values.tarih[0].$d.toISOString();
    values.bitTarih = values.tarih[1].$d.toISOString();
    delete values.tarih;
    // console.log("Success:", values);
    try {
      const response = await generalsApi.getSiparisler(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex items-center justify-start mt-6">
        <img src={checkSvg} alt={checkSvg} />
        <p className="text-[12px]/[15.6px] font-inter">
          Aktarılmış siparişler listelensin mi? ( Son 7 güne aitler listelenir )
        </p>
      </div>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <div className="flex items-center justify-start mt-8 [&>*]:mr-16 flex-wrap">
          <Form.Item
            name="tarih"
            className="w-[400px] h-[35px] my-3 bg-tudorsGray"
            rules={[
              {
                required: true,
                message: "Başlangıç ve Bitiş tarihlerini seçin!",
              },
            ]}
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
            rules={[{ required: true, message: "Aktarım durumunu seçin!" }]}
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
          <Button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AC9E3] rounded-md font-inter">
            Seçilenleri Manual Aktar
          </Button>
        </div>
      </Form>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={myData}
        className="font-inter mt-8"
      />
    </>
  );
};

export default List;
