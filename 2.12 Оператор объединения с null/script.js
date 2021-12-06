// let user;
// let user2;
// alert(user ?? "Аноним"); // Аноним
// alert(user2 ?? 'NOUP');
//
// let user3 = "Иван";
//
// alert(user3 ?? "Аноним"); // Иван


let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое определённое значение:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер
//  ИЛИ используем вместо ??
// let firstName = null;
// let lastName = null;
// let nickName = "Суперкодер";
//
// // показывает первое истинное значение:
// alert(firstName || lastName || nickName || "Аноним"); // Суперкодер

// let height = 0;
//
// alert(height || 90); // 90
// alert(height ?? 9); // 0
// alert(height ?? 10);


// height || 100 проверяет, имеет ли переменная height ложное значение, что так и есть,
//     поэтому результатом является второй аргумент, т.е. 100.
// height ?? 100 проверяет, что переменная height содержит null/undefined, а поскольку это не так,
//     то результатом является сама переменная height, т.е. 0.


let height = null;
let width = null;

// важно: используйте круглые скобки
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000



let x = 1 && 2 ?? 3; // Синтаксическая ошибка
// Это довольно спорное ограничение, которое было описано в спецификации языка, чтобы избежать ошибок при замене оператора || на ??.
//
// Используйте круглые скобки, чтобы обойти это ограничение:

    let x = (1 && 2) ?? 3; // Работает без ошибок

alert(x); // 2