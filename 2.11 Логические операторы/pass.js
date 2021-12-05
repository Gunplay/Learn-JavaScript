// let userName = prompt("Кто там?", '');
// let mass = ['Vova', 'Админ', 'Andrey', 'Nastya', 'Nikita'];
// let passArr = ['1','2','3','4', 'Я главный'];
// let fogetPass = prompt('Забыли пароль? Введите эмеил', '');
// if (userName = mass) {
//
//
//     let pass = prompt('Пароль?', '');
//
//     if (pass = passArr) {
//         alert( 'Здравствуйте!' );
//     } else if (pass == '' || pass == null) {
//         alert( 'Отменено' );
//     } else {
//         alert( 'Неверный пароль' );
//     }
//
// } else if (userName == '' || userName == null) {
//     alert( 'Отменено' );
// } else {
//     alert( "Я вас не знаю" );
// }
//
//     if (fogetPass == null || pass == '') {
//
//     }


let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass == 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass == '' || pass == null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (userName == '' || userName == null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}