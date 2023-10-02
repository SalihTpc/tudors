import { Button, DatePicker, Form } from "antd";
import downSvg from "../../assets/icons/dropDown.svg";
import checkSvg from "../../assets/icons/check.svg";
import saveSvg from "../../assets/icons/save.svg";
import dayjs from "dayjs";
import { useState } from "react";
import TimeDateSelection from "../../components/TimeDateSelection";

const StockEqual = () => {
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(dayjs().toISOString());
  const [selectedTime, setSelectedTime] = useState(dayjs("00:00", "HH:mm"));

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

  const onFinish = (values: any) => {
    values.time = selectedTime;
    values.date = selectedDate;
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <div className="mt-8 [&>*]:mr-16 my-4 mx-48 [&>*]:mb-6">
        <Form.Item
          name="orderStatus"
          className="w-[273px] h-[35px] mx-0 my-3 bg-tudorsGray text-black"
        >
          <DatePicker
            style={{ color: "rgba(0, 0, 0, 1)" }}
            className="w-full"
            bordered={false}
            format="YYYY-MM-DD HH:mm"
            showTime={{ defaultValue: dayjs("00:00:00", "HH:mm") }}
            placeholder="Tarih - Saat"
            suffixIcon={<img src={downSvg} />}
          />
        </Form.Item>
        <p className="text-xs font-inter my-3">
          Son işlem tamamlama tarih saati : 19.07.2023 / 04:16
        </p>
        <div className="">
          <TimeDateSelection
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            setSelectedTime={setSelectedTime}
            selectedTime={selectedTime}
          />
        </div>
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
        <div className="mb-4 mt-8 font-inter">
          <table className="table-auto font-inter">
            <thead>
              <tr className="bg-tudorsGray">
                <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
                  Ürün Kodu
                </th>
                <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
                  Renk Kodu
                </th>
                <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
                  Barcode
                </th>
                <th className="border font-semibold w-[117px] h-[37px] text-[12px]/[15.6px]">
                  Envanter
                </th>
                <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
                  Satış Fiyatı
                </th>
                <th className="border font-semibold w-[177px] h-[37px] text-[12px]/[15.6px]">
                  İndirimli Satış Fiyatı
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="text-center">
                  <td className="border text-[12px]/[15.6px]">
                    {row.urunKodu}
                  </td>
                  <td className="border text-[12px]/[15.6px] h-[37px]">
                    {row.renkKodu}
                  </td>
                  <td className="border text-[12px]/[15.6px] h-[37px]">
                    {row.barcode}
                  </td>
                  <td className="border text-[12px]/[15.6px] h-[37px]">
                    {row.envanter}
                  </td>
                  <td className="border text-[12px]/[15.6px] h-[37px]">
                    {row.satisFiyati}
                  </td>
                  <td className="border text-[12px]/[15.6px] h-[37px]">
                    {row.indirimliFiyat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Form>
  );
};

export default StockEqual;
