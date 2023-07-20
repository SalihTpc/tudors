import checkSvg from "../assets/icons/check.svg";
import trashSvg from "../assets/icons/trash.svg";
import React from "react";

interface TableRow {
  siparisKaynagi: string;
  siparisID: string;
  siparisTarihi: string;
  toplamTutar: string;
  siparisDurumu: string;
  nbStatu: string;
  kgStatu: string;
}

interface TableComponentProps {
  data: TableRow[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr className="bg-tudorsGray">
          <th className="bg-white w-6"></th>
          <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
            Sipariş Kaynağı
          </th>
          <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
            Sipariş ID
          </th>
          <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
            Sipariş Tarih-Saati
          </th>
          <th className="border font-semibold w-[117px] h-[37px] text-[12px]/[15.6px]">
            Toplam Tutar
          </th>
          <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
            Sipariş Durumu
          </th>
          <th className="border font-semibold w-[116px] h-[37px] text-[12px]/[15.6px]">
            NB Statü
          </th>
          <th className="border font-semibold w-[116px] h-[37px] text-[12px]/[15.6px]">
            KG Statü
          </th>
          <th className="bg-white"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="text-center">
            <td className="w-6">
              <img className="w-6 h-6" src={checkSvg} alt={checkSvg} />
            </td>
            <td className="border text-[12px]/[15.6px]">
              {row.siparisKaynagi}
            </td>
            <td className="border text-[12px]/[15.6px] h-[37px]">
              {row.siparisID}
            </td>
            <td className="border text-[12px]/[15.6px] h-[37px]">
              {row.siparisTarihi}
            </td>
            <td className="border text-[12px]/[15.6px] h-[37px]">
              {row.toplamTutar}
            </td>
            <td className="border text-[12px]/[15.6px] h-[37px]">
              {row.siparisDurumu}
            </td>
            <td className="border text-[12px]/[15.6px] h-[37px]">
              {row.nbStatu}
            </td>
            <td className="border text-[12px]/[15.6px] h-[37px]">
              {row.kgStatu}
            </td>
            <td>
              <button className="flex items-center justify-start">
                <img className="w-6 h-6" src={trashSvg} alt={trashSvg} />
                <p className="text-[10px]/[13px] mt-1">Aktarımı Sil</p>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
