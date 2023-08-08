// penggunaan if-else
// let nilai = 70;
// if (nilai > 80) { //true or false
//   console.log("anda mendapatkan nilai A");
// } else {
//   nilai < 80;
//   console.log("anda mendapatkan nilai b");
// }
// jika mau pas nilai tapi lulus tambahkan = pada condisi
// let nilai = 70;
// if (nilai >= 70) {
//   console.log("anda mendapatkan nilai A");
// } else {
//   nilai < 70;
//   console.log("anda mendapatkan nilai b");
// }
//penggunaan else if
// let nilai = 40;
// if (nilai  > 90) {
//   console.log("anda mendapatkan nilai A");
// } else if (nilai >80){
//     console.log("anda mendapatkan nilai B")
// } else if (nilai >70){
//     console.log("anda mendapatkan nilai C")
// } else if (nilai >40){
//     console.log("anda mendapatkan nilai D")
// }else{
//     (nilai > 30);
//     console.log("anda mendapatkan nilai E");
//   }
//pembatasan nilai
// let nilai = 50;
// if (nilai >= 80 && nilai < 100) {
//   nilai = "A";
// } else if (nilai >= 70 && nilai < 80) {
//   nilai = "B";
// } else if (nilai >= 60 && nilai < 70) {
//   nilai = "C";
// } else {
//   nilai = "D";
// }
// console.log(nilai);
// operator && salah satu terpenuhi hasilnya false
// operator || salah satu terpenuhi hasilnya true
// operator != not

nilai = 60;
let banding1 = nilai >= 80 && nilai <= 100;
console.log(banding1);
let banding2 = nilai >= 80 || nilai < 90;
console.log(banding2);
let banding3 = nilai <= 50;
console.log(banding3);

// apa bedanya ==dengan ===
let x = 50; // tipe data
let y = "50"; //tipe data string
let banding4 = x == y;
console.log(banding4, "4");
let banding5 = x === y;
console.log(banding5, "5");
//if-else ini bisa kita bikin bersarang loh
let number = 6;
if (number > 5) {
  if (number % 2 === 0) {
    console.log("lebih besar dari 5 dan genap");
  } else {
    console.log("lebih besar dari 5 dan ganjil");
  }
} else {
  if (number % 2 === 0) {
    console.log("lebih kecil dari 5 dan genap");
  } else {
    console.log("lebih besar dari 5 dan genap");
  }
}
