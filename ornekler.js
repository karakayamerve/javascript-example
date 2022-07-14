//örnek9

for (i = 0; i <= 7; i++) {
  let deger = "";
  for (j = 0; j <= i; j++) {
    deger += "*";
  }
  console.log(deger);
}
//*
//**
//***
//****
//*****
//******
//*******
//********

//
//
//
//örnek 10

let deger = "aabbccaad";
let dgr = "";
let chars = deger.split("");
let lastChar = deger.split("")[0];
let counter = 0;

for (let i = 0; i <= chars.length; i++) {
  let value = chars[i];
  if (lastChar == chars[i]) {
    counter++;
  } else {
    dgr += counter + lastChar;
    counter = 1;
    lastChar = value;
  }
}
console.log(dgr); //-> 2a2b2c2a1d
//
//
//
//örnek 11 :tekrarlayan harf çıktısı-> 3 tane na,na,na bulundu

let w2 = ["merve", "sinan", "ayşe", "sinan", 1, 2, 3];
let w = w2.join("");
const regexp = /na/gi;
const regexp2 = /[0-9]/g;

const bul = w.match(regexp);
const sayı = bul.length;

const sayı2 = w.match(regexp2);

console.log(w); //mervesinanayşesinan123
console.log(sayı2.join("")); //123
for (let i = 0; i <= w.length; i++) {}

console.log(`${sayı}`, "tane", `${bul}`, "bulundu");
//
//
//
//örnek 12
let dizi = "aa9b6c-32af*t";
const regexp3 = /[A-Z]/gi;
const regexp4 = /[0-9]/g;
toplam2 = 0;

const harf2 = dizi.match(regexp3);
const sayı3 = dizi.match(regexp4);

for (let i = 0; i < sayı3.length; i++) {
  toplam2 = toplam2 + parseInt(sayı3[i]);
}
console.log(toplam2 + harf2.length); //toplam:20 harf:7 ->27

//
//
//örnek 13
// verilen sayılardan tekrar edenleri bulup , tekrar edenleri toplar =-1
let sayi = [0, -1, -1, 2, 3];
let array = [];
let array2 = [];
let sum = 0;

for (let i = 0; i < sayi.length; i++) {
  if (array.includes(sayi[i])) {
    if (!array2.includes(sayi[i])) {
      array2.push(sayi[i]);
      sum = sum + sayi[i];
    }
  }

  array.push(sayi[i]);
}
console.log(sum);
