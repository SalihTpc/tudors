import { Button, DatePicker, Form, Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import checkSvg from "../../assets/icons/check.svg";
import dateSvg from "../../assets/icons/date.svg";
import downSvg from "../../assets/icons/dropDown.svg";
import saveSvg from "../../assets/icons/save.svg";
import { setStockEqualSave } from "../../store/features/status/status.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Notification, NotificationType } from "../../lib/notification.lib";
import generalsApi from "../../api/generals.api";
import { StockEqualStatus } from "../../lib/generalValues";
import dayjs from "dayjs";

interface DataType {
  key: React.Key;
  urunKodu: string;
  renkKodu: string;
  barcode: string;
  envanter: string;
  satisFiyati: string;
  indirimliFiyat: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Ürün Kodu",
    dataIndex: "urunKodu",
  },
  {
    title: "Renk Kodu",
    dataIndex: "renkKodu",
  },
  {
    title: "Barcode",
    dataIndex: "barcode",
  },
  {
    title: "Envanter",
    dataIndex: "envanter",
  },
  {
    title: "Satış Fiyatı",
    dataIndex: "satisFiyati",
  },
  {
    title: "İndirimli Satış Fiyatı",
    dataIndex: "indirimliFiyat",
  },
];

const StockEqual = () => {
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const dispatch = useAppDispatch();

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const data = [
    {
      urunKodu: "Trendyol",
      renkKodu: "TRN484654684",
      barcode: "19.07.2023 - 18:43",
      envanter: "699,00₺",
      satisFiyati: "Onaylandı",
      indirimliFiyat: "Beklemede",
    },
    {
      urunKodu: "Ticimax Web",
      renkKodu: "54854884",
      barcode: "18.07.2023 - 18:43",
      envanter: "499,00₺",
      satisFiyati: "Onaylandı",
      indirimliFiyat: "Aktarıldı",
    },
  ];

  const myData: DataType[] = data.map((data, index) => ({
    ...data,
    key: index.toString(),
  }));

  const onFinish = async (values: any) => {
    // console.log("Success:", values.orderStatus.$d.toISOString());
    delete values.stopTime;
    dispatch(setStockEqualSave(values.orderStatus.$d.toISOString()));
    try {
      await generalsApi.saveServiceCriteria({
        serviceId: 2,
        startAt: values.orderStatus.$d.toISOString(),
      });
      message.success("Stok - Fiyat kriterleri eklendi.");
      form.resetFields();
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

  const stockEqualStatus: StockEqualStatus = useAppSelector(
    (state) => state.status.stockEqual
  );

  useEffect(() => {
    form.setFieldsValue({
      orderStatus: dayjs(stockEqualStatus?.time),
    });
  }, []);
  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <div className="mt-8 [&>*]:mr-16 my-4 [&>*]:mb-6">
        <Form.Item
          name="orderStatus"
          className="w-[273px] h-[35px] mx-0 my-3 bg-tudorsGray text-black"
        >
          <DatePicker
            style={{ color: "rgba(0, 0, 0, 1)" }}
            className="w-full"
            bordered={false}
            format="DD-MM-YYYY HH:mm"
            showTime
            placeholder="Tarih - Saat"
            suffixIcon={<img src={downSvg} />}
          />
        </Form.Item>
        <p className="text-xs font-inter my-3">
          Son işlem tamamlama tarih saati : 19.07.2023 / 04:16
        </p>
        <div className="mt-10 font-inter">
          <h4 className="text-sm">
            Aşağıdaki tarih ve saatte sipariş aktarımını otomatik durdur.
          </h4>
        </div>
        <Form.Item
          name="stopTime"
          className="w-[273px] h-[35px] mx-0 my-3 font-inter bg-tudorsGray text-black"
        >
          <DatePicker
            style={{
              color: "rgba(0, 0, 0, 1)",
            }}
            className="w-full"
            format="DD-MM-YYYY HH:mm"
            showTime
            placeholder="Tarih Saat Seç"
            bordered={false}
            suffixIcon={<img src={dateSvg} />}
          />
        </Form.Item>
        <div className="flex items-center justify-start">
          <img src={checkSvg} alt={checkSvg} />
          <p className="font-inter text-xs">
            Stok ve Fiyat eşitleme sırasında, henüz nebime akmayan siparişlerin
            ürünlerini,ticimax’e - olarak bas
          </p>
        </div>
        <div className="flex items-center justify-start -mt-6">
          <img src={checkSvg} alt={checkSvg} />
          <p className="font-inter text-xs">
            Servisten gelmeyen ürünlerin envanterini ticimax’de sıfırla ve
            durumunu disable yap.
          </p>
        </div>
        <Button
          className="w-fit h-fit mb-3 flex items-center justify-center"
          type="text"
          htmlType="submit"
        >
          <img src={saveSvg} alt="save" />
          <p className="font-medium text-base font-inter">Kaydet</p>
        </Button>
        <div className="mt-5 font-inter">
          <button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AE3D0] rounded-md mr-4">
            Listele
          </button>
          <button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AC9E3] rounded-md">
            Seçilenleri Manual Aktar
          </button>
        </div>

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={myData}
          className="font-inter"
        />
      </div>
    </Form>
  );
};

export default StockEqual;
