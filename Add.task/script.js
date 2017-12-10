//============= Модуль 1. Задание 1  ============== //

const a = 6;
const b = 10;
let result;

function getResult() {
  result = a + b;
  console.log(result); // -> 16
  
  result = -a;
  console.log(result); // -6

  result = a * b;
  console.log(result); // 60

  result = a / b;
  console.log(result); // 0.6

  result = (a + b) % 6;
  console.log(result); // 4
}

getResult();

//============= Задание 2  ============== //

const day = 02;
const month = 10;
const year = 2017;

const date = day + "/" + month + "/" + year;

console.log(date); // "02/10/2017"

//============= Задание 3  ============== //

const message = prompt("Ваше имя:", "");

// здесь заменить 'str' и 'STR' на message и вызов метода
let inLowerCase = message.toLowerCase(); // -> "success: in all lowercase"
let inUpperCase = message.toUpperCase(); // -> "success: in all uppercase"

console.log(checkCase(inLowerCase)); // success: in all lowercase
console.log(checkCase(inUpperCase)); // success: in all uppercase



//============= Функция для проверки кода ================= //
function checkCase(str) {
  if (str && str === str.toLowerCase()) { //применение && необходимо для предотвращения проверки на пустую строку и чтобы прекратить выполнение второй части выражения в случае null, 0, "", undefined, false.
    return "success: in all lowercase";
  } else if (str && str === str.toUpperCase()) {
    return "success: in all uppercase";
  }
  return "error: not in all lowercase or uppercase";
}
//============= end Функция для проверки кода ============== //

//============= Задание 4  ============== //

/*ECMA5

var name = 'Mango';
var typingSpeed = 50;

var text = name + ' печатает со скоростью ' + typingSpeed + ' знаков в минуту.';

console.log(text); // Mango печатает со скоростью 50 знаков в минуту.
*/

//ECMA6
const name = 'Mango';
const typingSpeed = 50;

const text = `${name} печатает со скоростью ${typingSpeed} знаков в минуту.`;

console.log(text); // Mango печатает со скоростью 50 знаков в минуту.

//============= Задание 5  ============== //

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = parseInt( padding ) + parseInt( border ) + parseInt( contentWidth ) + 'px';

console.log(totalWidth); // '125px'

//============= Задание 6  ============== //

const padding = "20.25px";
const border = "5.15px";
const contentWidth = "100.45px";

let totalWidth = parseFloat( padding) + parseFloat( border ) + parseFloat( contentWidth ) + 'px';

console.log(totalWidth); // '125.85px'

//============= Задание 7  ============== //

const a = 0.1;
const b = 0.2;
const c = 0.3;

// Исправить вычисления тут
const summ = ( a * 100 + b * 100 + c * 100 ) / 100;

console.log(0.6 === summ); // должно быть true
