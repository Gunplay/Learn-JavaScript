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

let userName = 'Вася';

function showMessage() {
    let userName = "Петя"; // объявляем локальную переменную

    let message = 'Привет, ' + userName; // Петя
    alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName

showMessage();

alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную




