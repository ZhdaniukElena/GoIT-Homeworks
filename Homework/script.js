const firstRow = 'qwertyuiop[]';
const secondRow = 'asdfghjkl';
const thirdRow = 'zxcvbnm';

const lengthOfFirstRow = firstRow.length;
const lengthOfSecondRow = secondRow.length;
const lengthOfThirdRow = thirdRow.length;

const characterFirstRow = firstRow.charAt(0) + firstRow.charAt(lengthOfFirstRow - 1);
const characterSecondRow = secondRow.charAt(0) + secondRow.charAt(lengthOfSecondRow - 1);
const characterThirdRow = thirdRow.charAt(0) + thirdRow.charAt(lengthOfThirdRow - 1);

let a = firstRow.indexOf("[");
let b = firstRow.indexOf("]");


console.log( `Первая строка хранит – "${firstRow}", ее длина – "${lengthOfFirstRow}" символов, первый и последний символ – "${characterFirstRow}";
Вторая строка хранит – "${secondRow}", ее длина – "${lengthOfSecondRow}" символов, первый и последний символ – "${characterSecondRow}";
Третья строка хранит – "${thirdRow}", ее длина – "${lengthOfThirdRow}" символов, первый и последний символ – "${characterThirdRow}";
Порядковый номер символа "[" – "${a}", символа "]" – "${b}".` );