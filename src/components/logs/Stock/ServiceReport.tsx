import { Button, DatePicker, Form, Select, Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { useState } from "react";
import productApi from "../../../api/product.api";
import dateSvg from "../../../assets/icons/date.svg";
import downSvg from "../../../assets/icons/dropDown.svg";
import { localeDateTime } from "../../../lib/functions";
import { option } from "../../../lib/generalValues";
import { Notification, NotificationType } from "../../../lib/notification.lib";

interface DataType {
  key: React.Key;
  id: number;
  startDateTime: string;
  state: number;
  stockCount: number;
  endDateTime: string;
  logData: string;
  totalCount: number;
}

const ServiceReport = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);

  type FieldType = {
    startDate?: string;
    logType?: number;
    recordCount?: number;
  };

  const stateOptions: option[] = [
    { label: "Devam Eden", value: 1 },
    { label: "Tamamlandı", value: 2 },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "id",
    },
    {
      title: "Başlangıç Tarih-Saati",
      dataIndex: "startDateTime",
      render: (text) => <p>{dayjs(text).format("DD/MM/YYYY - HH:mm:ss")}</p>,
    },
    {
      title: "Durum",
      dataIndex: "state",
      render: (text) => (
        <p>
          {text === 1 ? "Devam Eden" : null}
          {text === 2 ? "Tamamlandı" : null}
        </p>
      ),
    },
    {
      title: "Stok Sayısı",
      dataIndex: "stockCount",
    },
    {
      title: "Bitiş Tarih-Saati",
      dataIndex: "endDateTime",
      render: (text) => (
        <p>
          {text
            ? dayjs(text).format("DD/MM/YYYY - HH:mm:ss")
            : "Bitiş Tarihi Yok."}
        </p>
      ),
    },
    {
      title: "Log Data",
      dataIndex: "logData",
    },
    {
      title: "Toplam Sayı",
      dataIndex: "totalCount",
    },
  ];

  const onFinish = async (values: any) => {
    setLoading(true);
    if (values.startDate) {
      values.startDate = localeDateTime(values.startDate.$d);
    } else {
      delete values.startDate;
    }
    !values.state && delete values.state;
    try {
      const response = await productApi.getStockServiceReport(values);
      //   console.log(
      //     response.map((data: any) => ({
      //       ...data,
      //       key: data.id.toString(),
      //     }))
      //   );
      setData(
        response.map((data: any) => ({
          ...data,
          key: data.id.toString(),
        }))
      );
      message.success("Service Raporları Alındı");
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
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        // initialValues={{
        //   startDate: dayjs(),
        // }}
      >
        <div className="flex items-center justify-start [&>*]:mr-16 flex-wrap">
          <Form.Item<FieldType>
            name="startDate"
            className="w-[450px] h-[35px] mx-0 my-3 font-inter bg-tudorsGray text-black"
          >
            <DatePicker
              style={{
                color: "rgba(0, 0, 0, 1)",
              }}
              className="w-full"
              format="DD-MM-YYYY"
              placeholder={"Başlangış Tarihi"}
              bordered={false}
              suffixIcon={<img src={dateSvg} />}
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="state"
            className="w-[273px] h-[35px] my-3"
          >
            <Select
              bordered={false}
              allowClear
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={stateOptions}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="State Seçin"
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

export default ServiceReport;
