export interface option {
  label: string;
  value: number;
}

export const orderStatus: option[] = [
  // { label: "Sipariş Durumu", value: 20 },
  { label: "Ön sipariş", value: 0 },
  { label: "Onay bekliyor", value: 1 },
  { label: "Onaylandı", value: 2 },
  { label: "Ödeme bekliyor", value: 3 },
  { label: "Paketleniyor", value: 4 },
  { label: "Tedarik ediliyor", value: 5 },
  { label: "Kargoya verildi", value: 6 },
  { label: "Teslim edildi", value: 7 },
  { label: "Iptal edildi", value: 8 },
  { label: "Iade edildi", value: 9 },
  { label: "Silinmiş", value: 10 },
  { label: "Iade talebi alındı", value: 11 },
  { label: "Iade ulaştu ödeme yapılacak", value: 12 },
  { label: "Iade ödemesi yapıldı", value: 13 },
  { label: "Teslimat öncesi iptal talebi", value: 14 },
  { label: "Iptal talebi", value: 15 },
  { label: "Kısmi iade talebi", value: 16 },
  { label: "Kısmi iade yapıldı", value: 17 },
];
