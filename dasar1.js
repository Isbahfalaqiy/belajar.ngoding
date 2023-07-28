//cara membuat variabel
var a = "a";
var b = "b";
const c = "c";
//variabel bisa menampung tipe data string(text),integer/number,boolean,array,object

let nama = "bryan"; //string
let umur = 17; //number
let apakahbenar = true; //boolean
let uang = 500.5; //number namun ada koma

//Operasi Matematika
let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 * angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);

//belajar mengisi variabel
let penampungHasilOperasiMatematika = angka1 + angka2; //pertambahan 30
console.log(penampungHasilOperasiMatematika);

penampungHasilOperasiMatematika = angka1 - angka2; //pengurangan -10
console.log(penampungHasilOperasiMatematika);

penampungHasilOperasiMatematika = angka1 * angka2; //perkalian 200
console.log(penampungHasilOperasiMatematika);

penampungHasilOperasiMatematika = angka1 / angka2; //pembagian 0.5
console.log(penampungHasilOperasiMatematika);

penampungHasilOperasiMatematika = angka1 % angka2; //persentase 10
console.log(penampungHasilOperasiMatematika);

//string juga bisa ditambah nama string g bisa dikurang dengan operator aritmatika

let firstName = "Isbah";
let lastName = "Falaqiy";
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(firstName + " " + lastName);
console.log(firstName - " " - lastName);

//alur pemabcaan code
//untuk membaca code kalian harus membacanya dari kiri ke kanan dan dari atas kebawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 30;
console.log(number + 10); //40
number = false;
console.log(number + 10); //10

//pertanyaan kenapa false - 10 tetap menjadi 10? karena false = 0 true =1

//contoh error
// const hewan ='jerapah';
// console.log(hewan)
// hewan='buaya';
