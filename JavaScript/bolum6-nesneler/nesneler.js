// =====================================================
//            NESNELER (OBJECTS)
//======================================================

// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.

// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.

// ! OBJECT
// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.

// Object literal
const insan = {
  ad: "Can",
  soyad: "Yilmaz",
  yas: 30,
  meslek: "Developer",
  diller: ["Java", "JS", "C++", "SQL", "Phyton"],
};
console.log(insan);

//.dot notasyone ile verilere erisilebilir.
console.log(insan.ad);

// Köseli parantez erişimi (köşeli parantez içerisine bir expressiion yazmak mümkünüdür.)
console.log(insan["diller"]);

const yazi = "Adim";
console.log(`${yazi} ${insan.ad} ve yasim ${insan["yas"]}'dur.`);

// const bilgiSecimi = prompt(
//   "Insan nesnesi hakkinda ne bilmek istersiniz? Seciminizi giriniz: as, soyad, yas, meslek veya diller."
// );

// if (insan[bilgiSecimi]) {
//   console.log(insan[bilgiSecimi]);
// } else {
//   console.log(
//     "Yanlis secim! Lutfen ad, soyad, yas, meslek veya diller seklinde giris yapiniz."
//   );
// }

insan.konum = "Turkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1990;

console.log(insan);

// ======================================================
//                  Nesne Metotları
// ======================================================

const kisi = {
  ad: "Ahmet",
  soyad: "Can",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenium",
  ehliyet: true,
    yasHesapla: function () {
        console.log(this);
        return new Date().getFullYear() - this.dogumTarihi;
  },
};

const tarih = new Date();
console.log(tarih.getMonth());
console.log(tarih.getTime());
console.log(tarih.getDay());

console.log(kisi.yasHesapla());