// console.log("Hello Javascript");

// console.log("Javascript Java'dan kolay bir dildir.");
// console.error("Bu bir hatadir!");
// console.warn("Bu bir uyaridir.");

// alert("Dikkat");

// * DEGISKEN TANIMLAMA

/* NOTE: 
var keyword ile degisken tanimlanabilir ancak modern JS ile
var keyword'unun kullanimi azaldi. Cunku var global degisken
gibi dusunulmektedir
*/

var pi = 3.14;
console.log(pi);
console.log("pi degiskeninin veri tipi" + typeof pi);

pi = "3";
console.log(pi);
console.log("pi degiskeninin veri tipi" + typeof pi);

pi = true;
console.log(pi);
console.log("pi degiskeninin veri tipi" + typeof pi);

isim = "Ahmet";
console.log(isim);
console.log("isim degiskeninin veri tipi" + typeof isim);

isim = 4;
console.log(isim);
console.log("isim degiskeninin veri tipi" + typeof isim);

// const ve let yeni degisken tanimlama keyword'leridir.
/* CONST sadece baslangicta deger atilabilir. Sonradan 
deger degistirilemez.
// const piSayisi;
// console.log(piSayisi); */

const piSayisi = 3.14;
console.log(piSayisi);

// piSayisi = 3;
// console.log(piSayisi);

// ** ----- LET -----

/* Egerki degiskenimizin degerinin degismesi gerekiyorsa CONST kullanamayiz.
Bunun yerine LET kullanabiliriz.
 */

// ! LET block-scope bir degiskendir. Var ise globak-scope bir tanimlamadir
// Block-scope: Sadece tanimli oldugu alanda gecerlidir.

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa";
let isim2 = "Ahmet";
let isim3 = `Alican`;
console.log(isim1);
console.log(isim2);
console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

const sucuk = 40;
const sakiz = 2;
const kola = 5;
let toplamFiyat = sucuk + sakiz + kola;
toplamFiyat++;
toplamFiyat += 50;
// ! Birden fazla degiskenin degerini yazdirmak icin "," kullanilir.
console.log(toplamFiyat, kola); // ? 98 5
console.log("TOPLAM: ", toplamFiyat); // ? TOPLAM:  98

// ! "+"" operatoru string birlestirme islemini de gerceklestirir
const ad = "Can";
const soyad = "Canan";
console.log("Isim Soyisim: " + ad + " " + soyad);

const s1 = 7,
  s2 = "7";
console.log(s1 + s2);

const ad1 = "Mesut";
const yas = 55;

console.log("Benim adim " + ad1 + " " + "yasim " + yas + "dir.");
console.log(`Benim adim ${ad1} yasim ${yas}dir.`);

const yil = 2021;
const dogumTarihi = 1980;
const sene = yil - dogumTarihi;
console.log("Yas: " + sene);
console.log("Yas: " + yil - dogumTarihi); // !HATA -> NaN = Not a Number
console.log("Yas: " + (yil - dogumTarihi));
console.log(`Yasim: ${yil - dogumTarihi}`); // * Template Literal ile yazdirma

const taban = 2;
const us = 8;
const sonuc = taban ** us; // ? us alma operatoru "**"
console.log(sonuc);
console.log(`${taban} ussu ${us} isleminin sonucu ${sonuc} olur.`);

// Mod alma %
const sayi = 123;

const birler = sayi % 10;
const onlar = Math.floor((sayi / 10) % 10);
const yuzler = Math.floor(sayi / 100);
console.log(`Birler basamagi: ${birler}`);
console.log(`Onlar basamagi: ${onlar}`);
console.log(`Yuzler basamagi: ${yuzler}`);

// * KARSILASTIRMA OPERATORLERI
// ! 3'lu karsilastirma operatoru kullanildiginda hem veri tipi hem de icerik kontrolu yapilir
const sayi1 = 100;
const sayi2 = "100";

console.log(typeof sayi1, typeof sayi2);

console.log(sayi1 == sayi2);
console.log(sayi1 === sayi2);

console.log(sayi1 !== sayi2);
console.log(sayi1 !== sayi2);

// * ======= TERNARY =======
const name = prompt("Adinizi giriniz: ");
const age = +prompt("Yasinizi giriniz:"); // Girilen ifadeyi number'a cevirme
//Kisa yoludur, genel kullanim
// const age = Number(prompt("Yasinizi giriniz:"));
console.log(`Yasiniz: ${age}`);
console.log(typeof age);

// Girilen yas 18'den buyukse ehliyet alabilir
age >= 18
  ? console.log(`${name} ehliyet alabilir`)
  : console.log(`${name} ehliyet alamaz.`);

const result =
  age >= 18 ? `${name} ehliyet alabilir.` : `${name} ehliyet alamaz.`;
console.log(result);

const sayi4 = 41;
console.log(String(sayi4), sayi4);