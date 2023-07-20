import TableComponent from "./TableComponent";

const Table = () => {
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
  return (
    <div className="mb-4 mx-[168px] mt-8">
      <TableComponent data={data} />
    </div>
  );
};

export default Table;
