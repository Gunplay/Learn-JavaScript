//В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).


// if (1 || 0) { // работает как if( true || false )
//     alert( 'truthy!' );
// }

// let hour = 9;
//
// if (hour < 10 || hour > 18) {
//     alert( 'Офис закрыт.' );
// }


let hour = 11;
//let isWeekend = true;
let close = true;
if (hour < 10 || hour > 18 || close) {
    alert( 'Офис закрыт.' ); // это выходной
}