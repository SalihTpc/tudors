import { DatePicker, Form, Select } from "antd";
import Actions from "../../components/Actions";
import dayjs from "dayjs";
import downSvg from "../../assets/icons/dropDown.svg";
import { option } from "../../lib/generalValues";

export const options: option[] = [
  { label: "Seçenek 1", value: 1 },
  { label: "Seçenek 2", value: 2 },
  { label: "Seçenek 3", value: 3 },
];
const Logs = () => {
  return (
    <>
      <Actions />
      <div className="my-2 mx-48 font-inter">
        <h2 className="text-xl mb-3">Loglar</h2>
        <hr className="border border-solid border-black" />
      </div>
      <Form>
        <div className="flex items-center justify-start mt-8 [&>*]:mr-16 my-4 mx-48 flex-wrap [&>*]:mb-4">
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
          <Form.Item name="category" className="w-[273px] h-[35px] my-3">
            <Select
              bordered={false}
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={options}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="Kategori Seç"
            />
          </Form.Item>
          <Form.Item name="processStatus" className="w-[273px] h-[35px] my-3">
            <Select
              bordered={false}
              className="w-[273px] h-[35px] text-sm font-inter rounded-none bg-tudorsGray"
              suffixIcon={<img src={downSvg} />}
              options={options}
              dropdownStyle={{ backgroundColor: "#F0F0F0" }}
              placeholder="İşlem Durumu"
            />
          </Form.Item>
          <button className="min-w-[273px] h-[35px] border-[0.2px] border-solid border-black">
            Sipariş ID
          </button>
          <button className="min-w-[273px] h-[35px] border-[0.2px] border-solid border-black">
            Barcde
          </button>
        </div>
      </Form>
    </>
  );
};

export default Logs;
