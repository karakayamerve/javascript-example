// 1. örnek
// ınput 4 girince 4*3*2*1=24

function FirstFactorial(num) {
  if (num > 1) {
    return num * FirstFactorial(num - 1);
  }
  return num;
}
console.log(FirstFactorial(readline()));

//2. örnek
//["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] tekrarlayanları bul ->1,4,13

function FindIntersection(strArr) {
  let array = [];
  let tek = [];
  let cift = [];

  for (let i = 0; i < strArr.length; i++) {
    array = array.concat(strArr[i].split(", "));
  }
  for (let i = 0; i < array.length; i++) {
    if (!tek.includes(array[i])) {
      tek.push(array[i]);
    } else {
      cift.push(array[i]);
    }
  }
  return cift.join(",");
}

//3. örnek
// ı love dog -> uzun olan ilk kelime getirir
//"fun&!! time"   -> time ekrana yazar

function LongestWord(sen) {
  wrds = sen.match(/\w+/gi);
  let l = wrds.length;
  let i = 0;
  let a = "";
  for (i; i < l; i++) {
    if (wrds[i].length > a.length) {
      a = wrds[i];
    }
  }
  return a;
}

//4. örnek
//love yazıldığı zaman -> evol olarak çıktı alınır
function FirstReverse(str) {
  return str.split("").reverse().join("");
}

//5. örnek
//([1, 1, 6]): 6) // tüm rakamları çarpar
//([1, 4, 1, 1, 4]): 16)

function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result = result * x[i];
  }
  return result;
}
