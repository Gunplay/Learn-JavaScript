let userName = prompt("введите логин", '');

if (userName == 'Vova' || userName !== '') {

    alert(' Добро пожаловать')


    let pass = prompt('Введите пароль', '');
    if (pass == '1234') {
        alert('Вы вошли');
    } else if (pass !== "1234") {
        alert('Не верно');
        let fogetPass = prompt('Отправить пароль для восстановления на mail, Введите свой mail');
        alert('В течении 1 минуты проверьте почту');
    } else if (userName == '' || userName == null) {
        alert('Отмена');
    } else {
        alert('Не верно');
    }


}