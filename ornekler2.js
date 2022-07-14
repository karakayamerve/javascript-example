//1.örnek
//"4 yaşındayım ", 4-> klavyeden girilen rakamı string olarak getiriyor

let String = ["4 yaşındayım"];
const regexp2 = /[0-9]/g;
let year = String.match(regexp2);

console.log(parseInt(year[0]));

//2.örnek
// klavyeden 1,2,3 için tuşlama yapılırsa 1 ekrana gelir
// klavyeden 4,5,6 için tuşlama yapılırsa 2 ekrana gelir
const quarterOf = (month) => {
  const kis = [1, 2, 3];
  const bahar = [4, 5, 6];
  const yaz = [7, 8, 9];
  const sbahar = [10, 11, 12];

  if (kis.includes(month)) {
    return 1;
  } else if (bahar.includes(month)) {
    return 2;
  } else if (yaz.includes(month)) {
    return 3;
  } else if (sbahar.includes(month)) return 4;
};

//3. örnek
// sondaki özel karakteri siler -> "Hello World!"-> "Hello World"

function deger(s) {
  let dizi2 = s.split("").join("");
  let dizi3 = dizi2.slice(0, -1);
  return dizi3;
}

//4. örnek

// "Hello World!"-> "Hello World" (cümlenin neresinde özel karakter olursa onu siler)

let s = ["Hello World!"];
let dizi = s.split("").join();
const regexp = /[a-z]|\s/gi;
let dizi2 = s.match(regexp);

console.log(dizi2.join(""));
