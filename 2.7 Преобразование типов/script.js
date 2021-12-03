let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

// let value1 = false;
// alert(typeof value1);
//
// let number = true;
// alert(typeof number);


alert( "6" / "2" ); // 3, строки преобразуются в числа
alert("Vova" / "Nstya");

// можем использовать функцию Number(value), чтобы явно преобразовать value к числу:

    let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number

let str1 = "777";
alert(typeof str1); // number

let num1 = Number(str1);
alert(typeof num1); // number

let str2 = "888";
let bool = Boolean(str2);
alert(typeof bool);


//Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN. Например:
let str3 = "Привет как дела?";
let ageNum = Number(str3);

alert(ageNum); // NaN, преобразование не удалось

//Примеры:

    alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


// logic transform
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

// Заметим, что строчка с нулём "0" — это true
// Некоторые языки (к примеру, PHP) воспринимают строку "0" как false. Но в JavaScript, если строка не пустая, то она всегда true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)