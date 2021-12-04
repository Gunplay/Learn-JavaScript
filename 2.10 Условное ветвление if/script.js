// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//
// if (year == 2015);
//
//     alert( 'Вы правы!' );

// let germany = prompt (`Какая марка машины в Германии?`, '');
// if (germany == "BMW") {
//
//     alert('да');
//     alert("Вы такой умный!");
// }

// if (0) { // 0 is falsy
// //...
// }
// …а при таком – выполнится всегда:

    // if (1) { // 1 is truthy
    // //...
    // }

// let condition = (year == 2015); // преобразуется к true или false
//
// if (condition) {
//...
// }

// let year1 = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//
// if (year1 == 2015) {
//     alert( 'Да вы знаток!' );
// }
// if (year1 <= 2000) {
//     alert( 'Малова-то');
// }
//
// else if (year1 >= 2017) {
//     alert('Уго');
// }
// else {
//     alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }
//




// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');
//
// if (age > 18 && age >= 100) {
//     accessAllowed = true;
// }
// if (age >= 100) {
//     accessAllowed  = "Уже поздно";
// }
// else {
//     accessAllowed = "вы молоды";
// }
//
//
// alert(accessAllowed);

// let accessAllowed = (age > 18) ? true : false;
// console.log(accessAllowed);

// let age = prompt('Возраст?', 18);
//
// let message = (age < 3) ? 'Здравствуй, малыш!' :
//     ( age > 100 ) ? 'Уже поздно':
//     (age < 18) ? 'Привет!' :
//         (age < 100) ? 'Здравствуйте!' :
//             'Какой необычный возраст!';
//
// alert( message );



let age = prompt('Возраст?', 18);

if (age < 3) {
    message = 'Здравствуй, малыш!';
} else if (age < 18) {
    message = 'Привет!';
} else if (age < 100) {
    message = 'Здравствуйте!';
} else {
    message = 'Какой необычный возраст!';
}
alert( message );


// let company = prompt('Какая компания создала JavaScript?', '');
//
// (company == 'Netscape') ?
//     alert('Верно!') : alert('Неправильно.');


let company = prompt('Какая компания создала JavaScript?', '');

if (company == 'Netscape', company = 'Net' ) {
    alert('Верно!');
} else {
    alert('Неправильно.');
}