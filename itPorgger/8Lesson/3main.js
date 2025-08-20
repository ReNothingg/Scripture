var arr = [5, 7, 3, 8, 9, "str"]
//        10  14 6 16 18   NaN

for(var i=0; i < arr.length; i++){
    arr[i] *= 2;

    console.log("Элемент: " + i + ": " + arr[i])
}