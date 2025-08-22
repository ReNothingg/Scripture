function checkForm(el) {
    // var name = document.getElementById("name").value;

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    console.log(name + " - " + pass + " - " + repass + " - " + state);

    var fail = "";

    if (name == "" || pass == "" || state == "") {
        fail = "Заполните все поля!";
    }
    else if (name.length <= 2 || name.length > 50) {
        fail = "Введите корректное имя!";
    }
    else if (pass != repass) {
        fail = "Пароли должны совпадать!";
    }
    else if (pass.split("&").length > 1) {
        fail = "Некорректный пароль!";
    }

    if(fail!="") {
        document.getElementById("error").innerHTML = fail;
    } else {
        alert("Все данные корректно заполнены!");
        window.location = 'https://renothingg.github.io/';
    }

    return false;
}