import { Select } from "antd";
import React from "react";
import checkSvg from "../assets/icons/check.svg";
import saveSvg from "../assets/icons/save.svg";
import { option, orderStatus } from "../lib/generalValues";
import ConditionSelect from "./ConditionSelect";

const EntConditions = ({ children }: { children: React.ReactNode }) => {
  const options: option[] = [
    { label: "Seçenek 1", value: 1 },
    { label: "Seçenek 2", value: 2 },
    { label: "Seçenek 3", value: 3 },
  ];
  const timeOptions: option[] = [
    { label: "1dk", value: 60 },
    { label: "3dk", value: 180 },
    { label: "5dk", value: 300 },
    { label: "10dk", value: 600 },
    { label: "15dk", value: 900 },
    { label: "30dk", value: 1800 },
  ];
  console.log([{ label: "Sipariş Kaynağı", value: 0 }, ...options]);
  return (
    <div className="my-4 mx-48 font-inter">
      <>
        <div className="flex items-center justify-start mt-8 [&>*]:mr-2">
          <Select className="w-[273px] h-[35px]" />
          <ConditionSelect
            options={[{ label: "Sipariş Kaynağı", value: 0 }, ...options]}
          />
          <ConditionSelect
            options={[{ label: "Sipariş Durumu", value: 0 }, ...orderStatus]}
          />
          <ConditionSelect
            options={[{ label: "Kargo Şirketi", value: 0 }, ...options]}
          />
          <ConditionSelect
            options={[{ label: "İşlem Zamanlaması", value: 0 }, ...timeOptions]}
          />
        </div>
        <p className="font-inter font-normal text-[12px]/[15.6px] my-3">
          Son işlem tarih saati : 19.07.2023 / 13:26
        </p>
        {/* <TimeDateSelection /> */}
        <button className=" text-base flex items-center justify-center">
          <img className="w-[40px] h-[40px]" src={saveSvg} alt={saveSvg} />
          <span>Kaydet</span>
        </button>
        {children}
        <div className="flex items-center justify-start mt-6">
          <img src={checkSvg} alt={checkSvg} />
          <p className="text-[12px]/[15.6px]">
            Aktarılmış siparişler listelensin mi? ( Son 7 güne aitler listelenir
            )
          </p>
        </div>
        <div className="mt-5">
          <button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AE3D0] rounded-md mr-4 ">
            Listele
          </button>
          <button className="w-[227px] h-[40px] text-[14px]/[16.94px] font-medium bg-[#7AC9E3] rounded-md">
            Seçilenleri Manual Aktar
          </button>
        </div>
      </>
    </div>
  );
};

export default EntConditions;
