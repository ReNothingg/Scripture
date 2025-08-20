//alert("Какая хорошая погода!");

/*
var data = confirm("?");
console.log(data)
if (data) {
    console.log("ОООО ЗДРАВСТВУЙТЕ АГЕНТ!")
} 
*/


/*
var data = prompt("Скажите сколько вам лет?", 1488);
console.log(data);
*/

var person = null;
if(confirm("Вы человек? Нажмите на ОК")) {
    person = prompt("Как вас зовут?");
    alert("ОООО ЗДРАВСТВУЙТЕ АГЕНТ " + person + "!");
} else {
    alert("... почему?");
}