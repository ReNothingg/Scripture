var counter = 0;

function onClickBtn(el) {
    counter++;
    console.log(counter);
    el.innerHTML = "Press: " + counter;
    el.style.background = "blue";

    el.style.cssText = "font-size: 202px;"
}
//stoped 14:42

function OnInput(el) {
    if(el.valve == "Hello") {
        console.log("И тебе Hello!");
    }
    console.log(el.valve);
}