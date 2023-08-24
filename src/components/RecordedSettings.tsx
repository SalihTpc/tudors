import editSvg from "../assets/icons/edit.svg";
import trashSvg from "../assets/icons/trash.svg";
const RecordedSettings = () => {
  const data = [
    {
      orderSource: "Çoklu Seçim",
      orderStatus: "Beklemede",
      deliveryCompany: "KARGOIST",
      processTime: "10dk",
    },
  ];
  return (
    <div className="mb-4 mt-8 font-inter">
      <table className="table-auto font-inter">
        <thead>
          <tr className="bg-tudorsGray">
            <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
              Sipariş Kaynağı
            </th>
            <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
              Sipariş Durumu
            </th>
            <th className="border font-semibold w-[158px] h-[37px] text-[12px]/[15.6px]">
              Kargo Şirketi
            </th>
            <th className="border font-semibold w-[163px] h-[37px] text-[12px]/[15.6px]">
              İşlem Zamanlama
            </th>
            <th className="bg-white"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border text-[12px]/[15.6px]">{row.orderSource}</td>
              <td className="border text-[12px]/[15.6px] h-[37px]">
                {row.orderStatus}
              </td>
              <td className="border text-[12px]/[15.6px] h-[37px]">
                {row.deliveryCompany}
              </td>
              <td className="border h-[37px] flex items-center justify-center">
                <img className="w-6 h-6" src={editSvg} alt={editSvg} />
                <p className="text-[12px]/[15.6px]">{row.processTime}</p>
              </td>
              <td>
                <button className="flex items-center justify-start">
                  <img className="w-6 h-6" src={trashSvg} alt={trashSvg} />
                  <p className="text-[10px]/[13px] mt-1">Sil</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordedSettings;
