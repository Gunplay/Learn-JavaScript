// Термины: «унарный», «бинарный», «операнд»
// Прежде, чем мы двинемся дальше, давайте разберёмся с терминологией.
//
//     Операнд – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2. Иногда их называют «аргументами» вместо «операндов».
//
// Унарным называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак числа на противоположный:

    let x = 1;

x = -x;
alert( x ); // -1, применили унарный минус
//Бинарным называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:

    let x1 = 10, y = 3;
alert( y - x1 ); // 2, бинарный минус вычитает значения

let y1 = 10;
y1 = -y1;
alert( y1);

// Математика
// Поддерживаются следующие математические операторы:
//
//     Сложение +,
//     Вычитание -,
//     Умножение *,
//     Деление /,
//         Взятие остатка от деления %,
//     Возведение в степень **.
// Первые четыре оператора очевидны, а про % и ** стоит сказать несколько слов.



alert( 5001 % 2 ); // 1, остаток от деления 5 на 2
alert( 8 % 3 ); // 2, остаток от деления 8 на 3
alert( 8 % 0 );


alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)


alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)


//Но если бинарный оператор '+' применить к строкам, то он их объединяет в одну:

    let s = "моя" + "строка";
alert(s); // моястрока
//Обратите внимание, если хотя бы один операнд является строкой, то второй будет также преобразован в строку.

//    Например:

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
//Как видите, не важно, первый или второй операнд является строкой.

 //   Вот пример посложнее:

    alert(2 + 2 + '1' ); // будет "41", а не "221"

alert( 6 - '2' ); // 4, '2' приводится к числу
alert( '6' / '2' ); // 3, оба операнда приводятся к числам


// Не влияет на числа
let x4 = 1;
alert( +x4 ); // 1

let y4 = -2;
alert( +y4 ); // -2

// Преобразует не числа в числа
alert( -true ); // 1
alert( +"" );   // 0




let apples1 = "2";
let oranges1 = "3";

alert( apples1 + oranges1 ); // "23", так как бинарный плюс объединяет строки


let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5



// Приоритет	Название	Обозначение
// …	…	…
// 17	унарный плюс	+
// 17	унарный минус	-
// 16	возведение в степень	**
// 15	умножение	*
// 15	деление	/
// 13	сложение	+
// 13	вычитание	-
// …	…	…
// 3	присваивание	=
// …	…	…

let x5 = 2 * 2 + 1;

alert( x5 ); // 5




// let a = 1;
// let b = 2;
//
// let c = 3 - (a = b + 1);

//присваиваине по цепочке
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4


//Опять-таки, чтобы код читался легче, лучше разделять подобные конструкции на несколько строчек:

    c = 2 + 2;
b = c;
a = c;


//Эту запись можно укоротить при помощи совмещённых операторов += и *=:
let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

let z = 10;
z += 2;
z *= 2;
console.log(z);


let n3 = 2;

n3 *= 3 + 5;

alert( n3 ); // 16  (сначала выполнится правая часть, выражение идентично n *= 8)


alert( n3 ); // 14

alert( a ); // 3
alert( c ); // 0


//Инкремент ++ увеличивает переменную на 1:

let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
alert( counter ); // 3

//Декремент -- уменьшает переменную на 1:

let counter = 2;
counter--;        // работает как counter = counter - 1, просто запись короче
alert( counter ); // 1


// Поддерживаются следующие побитовые операторы:
//
//     AND(и) ( & )
// OR(или) ( | )
// XOR(побитовое исключающее или) ( ^ )
// NOT(не) ( ~ )
// LEFT SHIFT(левый сдвиг) ( << )
// RIGHT SHIFT(правый сдвиг) ( >> )
// ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )

