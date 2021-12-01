let admin;
let name = "Djon";

admin = name;
alert("admin")

let ourPlanetName = "Earth";



let hello = 'Hello world!';

let message;
let mess = "Hi";
// let mess = "Hi" error

// копируем значение 'Hello world' из переменной hello в переменную message
message = hello;


// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message); // Hello world!
alert(mess);

let $ = 1; // объявили переменную с именем "$"
let _ = 2; // а теперь переменную с именем "_"

alert($ + _); // 3

// let 1a; // не может начинаться с цифры
//
// let my-name; // дефис '-' не разрешён в имени


const myBirthday = '18.04.1982';
alert(myBirthday);
//myBirthday = '01.01.2001'; // ошибка, константу нельзя перезаписать!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
let color2 = COLOR_BLUE;
alert(color); // #FF7F00
alert(color2);