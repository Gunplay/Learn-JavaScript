// function checkAge(age) {
//     let age1 = prompt('Введите возраст', '');
//
//     if (age > 18) {
//         return true;
//     }
//
//     return confirm('Родители разрешили?');
//
// }
// checkAge();


// function checkAge(age) {
//
//
//     let age1 = prompt('Возраст?', '');
//
//
//     let message = (age1 > 18) ? 'Родители разрешили?':
//         (age1 < 18) ? 'пока!':
//             'какой не обычный возраст';
//
//
//     alert(message);
// }
//
// checkAge();



//Используя оператор || (самый короткий вариант):

// function checkAge(age) {
//
//     let age1 = prompt('Возраст?', '');
//     return (age1 > 18) || confirm('Родители разрешили?');
// }
// checkAge();

//
// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//
//     Пример вызовов:
//
//     min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// function min(a, b) {
//  a = 5;
//  b = 6;
//     if ( a < b) {
//         alert(a);
//         return a;
//     }
//         else {
//             alert(b);
//             return b;
//         }
//
//
// }
// min();


// Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
//
// function pow(x,n) {
//
//     const result = (a ** b);
//     let double = prompt('Введите число и возведём в степень', '');
//
//
//           alert(result);
//
// }
//
// pow();



function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}