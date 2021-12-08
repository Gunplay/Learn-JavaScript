// function showMessage() {
//     alert('Как дела?!');
// }
// showMessage();
// showMessage();

// Переменные, объявленные внутри функции, видны только внутри этой функции.
//
//     Например:

// function showMessage() {
//     let message = "Привет, я JavaScript!"; // локальная переменная
//
//     alert( message );
// }
//
// showMessage(); // Привет, я JavaScript!
//
// alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

//Локальные переменные
// Переменные, объявленные внутри функции, видны только внутри этой функции.
//
// Например:

// let userName = 'Вася';
// let userName1 = "Vova";
// let massUser = ['Nastya', "Kirill", "Sergey", "Dima", " Anya", "Ira"]
// function showMessage() {
//     let message = 'Привет, ' + userName + " " + userName1 + " " + massUser;
//     alert(message);
// }
//
// showMessage(); // Привет, Вася


// Внешние переменные
// У функции есть доступ к внешним переменным, например:

// let userName = 'Вася';

// function showMessage() {
//     userName = "Петя"; // (1) изменяем значение внешней переменной
//
//     let message = 'Привет, ' + userName;
//     alert(message);
// }
//
// alert( userName ); // Вася перед вызовом функции
//
// showMessage();
//
// alert( userName ); // Петя, значение внешней переменной было изменено функцией


// let userName = 'Dima';
//
// function showMessage() {
//     userName = 'Roma';
//
//     let message = 'Privet, ' + userName;
//     let message1 = 'Poka, ' + userName;
//     alert (message);
//     alert (message1);
// }
// alert (userName);
// showMessage();
//
// alert(userName);

//Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. Например, в коде ниже функция использует локальную переменную userName. Внешняя будет проигнорирована:

// let userName = 'Вася';
//
// function showMessage() {
//     let userName = "Петя"; // объявляем локальную переменную
//
//     let message = 'Привет, ' + userName; // Петя
//     alert(message);
// }
//
// // функция создаст и будет использовать свою собственную локальную переменную userName
//
// showMessage();
//
// alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную



// function showMessage(from, text) { // аргументы: from, text
//     alert(from + ': ' + text);
//
// }
//
// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)
// showMessage('Vova', "Were are you?");


// function showMessage(from1, text) {
//
//     from1 = '*' + from1 + '*'; // немного украсим "from"
//
//     alert( from1 + ': ' + text );
// }
// let from1 = "Jenya";
// let from = "Slavic";
//
// showMessage(from1, "how are you?"); // *Jenya*: Привет
//
// // значение "from" осталось прежним, функция изменила значение локальной переменной
// alert( from1 ); //


// function showMessage(from, text = "текст не добавлен") {
//     alert( from + " - " + text );
// }

// showMessage("Аня"); // Аня: текст не добавлен

//
// function showMessage(from, text = anotherFunction()) {
//     // anotherFunction() выполнится только если не передан text
//     // результатом будет значение text
// }



// Возврат значения
// Функция может вернуть результат, который будет передан в вызвавший её код.
//
//     Простейшим примером может служить функция сложения двух чисел:

//     function sum(a, b, c) {
//         return a + b * c;
//     }
//
// let result = sum(1, 2, 100);
// alert( result ); // 210

// function division(z, t) {
//     return z / t;
// }
//
//
// let result1 = division ( 20, 10);
// alert( result1 ); //



// Директива return может находиться в любом месте тела функции. Как только выполнение доходит до этого места, функция останавливается, и значение возвращается в вызвавший её код (присваивается переменной result выше).
//
// Вызовов return может быть несколько, например:

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else if ( age >= 25){
//         return confirm('уже давно можно');
//     } else {
//         return confirm('пошёл вон');
//     }
// }
//
// let age = prompt('Сколько вам лет?', 18);
//
// if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
// } else if (checkAge(age) )
//     alert ('пора');
//
// else {
//     alert( 'Доступ закрыт' );
// }



// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }
//
// let age = prompt('Сколько вам лет?', 18);
//
// if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
// } else {
//     alert( 'Доступ закрыт' );
// }

//Возможно использовать return и без значения. Это приведёт к немедленному выходу из функции.
//
// Например:
// function showMovie(age) {
//     if ( !checkAge(age) ) {
//         return;
//     }
//
//     alert( "Вам показывается кино" ); // (*)
//     // ...
// }

// В коде выше, если checkAge(age) вернёт false, showMovie не выполнит alert.
//
//     Результат функции с пустым return или без него – undefined
// Если функция не возвращает значения, это всё равно, как если бы она возвращала undefined:

    function doNothing() { /* пусто */ }

alert( doNothing() === undefined ); // true
//Пустой return аналогичен return undefined:

function doNothing() {
    return;
}

alert( doNothing() === undefined ); // true