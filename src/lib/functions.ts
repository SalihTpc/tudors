export const convertTurkishToEnglish = (str: string): string => {
  const convertedString = str
    .replace(/[öÖ]/g, "o")
    .replace(/[çÇ]/g, "c")
    .replace(/[şŞ]/g, "s")
    .replace(/[ğĞ]/g, "g")
    .replace(/[üÜ]/g, "u")
    .replace(/[ıİ]/g, "i")
    .toLowerCase()
    .replace(/\s+/g, "-") // boşlukları tireye dönüştür
    .trim(); // baştaki ve sondaki boşlukları kaldır
  return convertedString;
};
