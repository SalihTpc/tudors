import { Button, DatePicker, Form, Select, Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import productApi from "../../../api/product.api";
import dateSvg from "../../../assets/icons/date.svg";
import downSvg from "../../../assets/icons/dropDown.svg";
import { localeDateTime } from "../../../lib/functions";
import { option } from "../../../lib/generalValues";
import { Notification, NotificationType } from "../../../lib/notification.lib";

interface DataType {
  key: React.Key;
  id: number;
  logName: string;
  logType: number;
  logText: string;
  logDateTime: string;
  siparisId: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "",
    dataIndex: "id",
  },
  {
    title: "Log Tarih-Saati",
    dataIndex: "logDateTime",
    render: (text) => <p>{dayjs(text).format("DD/MM/YYYY - HH:mm:ss")}</p>,
  },
  {
    title: "Log Name",
    dataIndex: "logName",
  },
  {
    title: "Log Tipi",
    dataIndex: "logType",
    render: (text) => (
      <p>
        {text === 1 ? "Devam Ediyor" : null}
        {text === 2 ? "Tamamlandı" : null}
        {text === 3 ? "Hata" : null}
      </p>
    ),
  },
  {
    title: "Log Text",
    dataIndex: "logText",
  },
];

const ServiceLog = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);

  type FieldType = {
    date?: [string, string];
    logType?: number;
    recordCount?: number;
  };

  const recordOptions: option[] = [
    { label: "100", value: 100 },
    { label: "200", value: 200 },
    { label: "500", value: 500 },
  ];

  const logOptions: option[] = [
    { label: "Devam Ediyor", value: 1 },
    { label: "Tamamlandı", value: 2 },
    { label: "Hata", value: 3 },
  ];

  const onFinish = async (values: any) => {
    setLoading(true);
    if (values.date) {
      values.logDate1 = values.date[0].$d.toISOString().slice(0, -1);
      values.logDate2 = localeDateTime(values.date[1].$d);
      delete values.date;
    } else {
      delete values.date;
    }
    try {
      const response = await productApi.getStockServiceLog(values);
      setData(
        response.map((data: any) => ({
          ...data,
          key: data.id.toString(),
        }))
      );
      message.success("Service Logları Alındı");
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

  const initialAction = () => {};

  useEffect(() => {
    initialAction();
    return () => {};
  }, []);

  return (
    <>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        initialValues={{
          date: [dayjs().startOf("d"), dayjs()],
          recordCount: 100,
        }}
      >
        <div className="flex items-center justify-start [&>*]:mr-16 flex-wrap">
          <Form.Item<FieldType>
            name="date"
            className="w-[450px] h-[35px] mx-0 my-3 font-inter bg-tudorsGray text-black"
          >
            <DatePicker.RangePicker
              style={{
                color: "rgba(0, 0, 0, 1)",
              }}
              className="w-full"
              format="DD-MM-YYYY HH:mm"
              showTime
              placeholder={["Başlangış Tarihi", "Bitiş Tarihi"]}
              bordered={false}
              suffixIcon={<img src={dateSvg} />}
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="logType"
            className="w-[273px] h-[35px] my-3"
          >
            <Select
              bordered={false}
              allowClear
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={logOptions}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Log Tipi Seçin"
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="recordCount"
            className="w-[273px] h-[35px] my-3"
          >
            <Select
              bordered={false}
              allowClear
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={recordOptions}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Kayıt Adedi Seçin"
            />
          </Form.Item>
        </div>
        <Button
          className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AE3D0] rounded-md mt-3 font-inter"
          htmlType="submit"
        >
          Listele
        </Button>
      </Form>

      <Table
        locale={{ emptyText: "Data yok" }}
        columns={columns}
        dataSource={data}
        loading={loading}
        className="font-inter mt-8"
      />
    </>
  );
};

export default ServiceLog;
