alert( null || 2 || undefined ); //2

alert( alert(1) || 2 || alert(3) ); // 2

// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.
//
//     Первый оператор ИЛИ || выполнит первый alert(1).
//     Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
//     Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, которое будет выведено внешним alert( .... ).
// Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.

// И
alert( 1 && null && 2 ); //

// Ответ: 1, а затем undefined.
//
// alert( alert(1) && alert(2) );
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.
//
//     Поэтому до правого alert дело не дойдёт, вычисления закончатся на левом.


//Что выведет код ниже?

    alert( null || 2 && 3 || 4 );
// решение
// Ответ: 3.

alert( null || 2 && 3 || 4 );
// Приоритет оператора && выше, чем ||, поэтому он выполнится первым.
//
//     Результат 2 && 3 = 3, поэтому выражение приобретает вид:

    null || 3 || 4
// Теперь результатом является первое истинное значение: 3.

alert( 10 && null || 2 && 3 || 4 ); //10