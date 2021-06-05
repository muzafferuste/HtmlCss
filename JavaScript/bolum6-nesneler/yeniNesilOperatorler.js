// ======================================================
//      YENİ NESİL OPERATORLER: DESTRUCTURING (OBJECT)
// ======================================================
// ES6 ile birlikte bir dizi ya da nesnenin içerisindeki
// elemanlar kolaylıkla ayrıştırılabilir.

const birey = {
  ad: "Can",
  konum: "Samsun",
  email: "can@gmail.com",
};

// 1.Yöntem Klasik yöntem
const ad1 = birey.ad;
const konum1 = birey.konum;

console.log(ad1, konum1);

// * 2. YONTEM (OBJECT  DESTRUCTRING)
/* ! Destructing kullanilirken "Key" isimleri nesneninki ile ayni olmalıdır aksi 
takdirde undefined degerler donerler */
const { ad, konum, email } = birey;

console.log(ad);
console.log(konum);
console.log(email);