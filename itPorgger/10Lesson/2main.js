function summa(arr) {
    var sum = 0;
    for(var i=0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

var array = [6, 2, 62, 2345,23452, 3, 45234];
var array_1 = [2, 4, 5, 1];
var array_2 = [3, 5, 6, 2];


console.log(summa(array));
var res = summa(array_1);
//summa(array_2);
console.log("Result 2: " + res);