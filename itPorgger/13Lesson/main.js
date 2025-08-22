// setInterval(my_func, 1000);
var counter = 0;
// function my_func() {
//     counter++;
//     console.log(counter);
// }

var id = setInterval(function() {
    counter++;
    console.log(counter);

    if (counter == 3) {
        clearInterval(id);
    }
}, 1000)