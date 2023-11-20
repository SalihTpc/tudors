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

export const removeDuplicates = (strings: string[]): string[] => {
  const uniqueStrings: string[] = [];
  const seenStrings: { [key: string]: boolean } = {};

  for (const str of strings) {
    if (!seenStrings[str]) {
      uniqueStrings.push(str);
      seenStrings[str] = true;
    }
  }

  return uniqueStrings;
};

export const localeDateTime = (value: Date) => {
  const date2 = value;
  const offset2 = date2.getTimezoneOffset();
  return new Date(date2.getTime() - offset2 * 60000).toISOString().slice(0, -1);
};
