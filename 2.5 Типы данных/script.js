// Не будет ошибкой
let message = "hello";
message = 123456;
alert(message);

let n = 123;
n = 12.345;

alert( 1 / 0 ); // Infinity

alert( "не число" / 2 ); // NaN, такое деление является ошибкой

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;
alert(bigInt);

//Cтрока (string) в JavaScript должна быть заключена в кавычки.

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
alert(str);



let name = "Иван";
let age = "25"

// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3
alert(`Result: ${10 * 10}`);
alert(`Мой возраст - ${age}`);


let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
console.log(nameFieldChecked);
console.log(ageFieldChecked);

let isGreater = 4 > 10 / 3;

alert( isGreater ); // true (результатом сравнения будет "да")


let ageMy = null;
console.log(ageMy);

let age1;

alert(age1); // выведет "undefined"

let age2 = 123;

// изменяем значение на undefined
age2 = undefined;

alert(age2); // "undefined"

//Вызов typeof x возвращает строку с именем типа:
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)


let name1 = "Ilya";

alert( `hello ${1}` ); //

alert( `hello ${"name"}` ); //

alert( `hello ${name1}` ); // Hello Ilya

typeof null // "object"  (2)

typeof alert // "function"  (3)