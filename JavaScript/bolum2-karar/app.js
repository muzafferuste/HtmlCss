// const s1 = +prompt("Birinci sayiyi giriniz!");
// const islem = prompt("Islem giriniz!");
// const s2 = +prompt("Ikinci sayiyi giriniz!");
// let sonuc = 0;
// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if (islem == "*") {
//   sonuc = s1 * s2;
// } else if ((islem = "/")) {
//   sonuc = s1 / s2;
// } else {
//   alert(`Yanlis islem yaptiniz !!`);
// }

// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

// const age = prompt("Yasinizi giriniz");
// const healt = prompt("Saglikli misiniz? e/h?");

// // alert(age > 18 && healt == "e"
// //     ? "Askere gidebilir."
// //     : "Askere gidemez.");

// const result = age > 18 && healt == "e" ? "Askere gidebilir." : "Askere gidemez."
// console.log(result);
// alert(result);

//************************ SWITCH-CASE ***********************
// const gunNo = +prompt("Gun numarasini giriniz:");
// switch (gunNo) {
//   case 1:
//     gunAdi = "Pazartesi";
//     break;
//   case 2:
//     gunAdi = "Salı";
//     break;
//   case 3:
//     gunAdi = "Çarşamba";
//     break;
//   case 4:
//     gunAdi = "Perşembe";
//     break;
//   case 5:
//     gunAdi = "Cuma";
//     break;
//   case 6:
//     gunAdi = "Cumartesi";
//     break;
//   case 7:
//     gunAdi = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }
// console.log(gunAdi);

//************************ TERNARY ************************
// // ÖRNEK
// const maas = prompt("Maasinizi giriniz:");
// const calismaSuresi = prompt("Calisma suresini giriniz:");
// const zamliMaas =
//   calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
// console.log(zamliMaas);

// // ÖRNEK
// const borç = 0;
// const maaş = 3000;
// console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 🤑" : "Kredi Alamaz 🥺");

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// const sayi = prompt("Dongu miktarini giriniz: ");
// for (let i = 1; i <= sayi; i++){
//     console.log(`${i} Mehmet`);
// }

// Aasl sayi tespiti
// const number = 7 //+prompt("Sayiyi giriniz: ");
// let asal = true;
// for (let i = 2; i < number; i++){
//     if (number % i == 0) {
//         asal = false;
//         break;
//     }
// }
// const asalMi = asal ? "Asal" : "Asal degil.";
// console.log(asalMi);

//ÖRNEK: do- while döngüsü
// let not;
// do {
//   not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);
// console.log("Giridiğiniz not 0-100 arasındadır");

// ÖRNEK: while döngüsü
// let not;
// not = prompt("0-100 arasında bir not giriniz:");
// while (not < 0 || not > 100) {
//   console.error("Girilen not 0-100 arasında olmalıdır.");
//   not = prompt("0-100 arasında bir not giriniz:");
// }
// console.log("Giridiğiniz not 0-100 arasındadır");

// ÖRNEK: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

let not1;
let i = 1;
while (true) {
  not1 = prompt(i + ".kisinin notunu giriniz:");
  not1 = not1.toLowerCase(); // girilen karakteri küçük harfe çeviriyoruz.
  if (not1 == "q") {
    break;
  }
  i++;
  console.log(Number(not1));
}