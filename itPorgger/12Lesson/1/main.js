var text = document.getElementById("text");
// console.log(text.id);

// console.log(text.title);
// text.title = "Манго"
// console.log(text.title);

// text.style.color = "red";
// text.style.backgroundColor = "black";
// text.innerHTML = "New <br> string <br> jbhash";
// document.getElementById("text").style.color = "white";

// var spans = document.getElementsByTagName("span");
var spans = document.getElementsByClassName("simple-text"); 
for (var i=0; i <= spans.length; i++) {
    console.log(spans[i].innerHTML);
}