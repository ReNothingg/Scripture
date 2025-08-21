var num = 10;

function info() {
    var num = 20;
    console.log(num);
}

info();

console.log(num); // Uncaught ReferenceError: num is not defined