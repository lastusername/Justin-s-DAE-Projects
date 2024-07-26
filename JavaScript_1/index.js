function greet(fname, lname) {
    console.log("Hello "+fname+" "+lname)
}
function disSum() {
    let integer2 = 3;
    let sum = (integer + integer2);
    window.alert("The sum of my integers is "+ sum);
}
console.log("hello");

let inp = prompt("hello user, type something below!");
let integer = 2;



var isTrue = true;
var isNotFalse = true;

if (isTrue === true) {
    console.log(" '"+inp+"' is what inputed and the integer I chose is "+integer);
} else {
    console.log("How is that possible");
}
 
while (isTrue === true && isNotFalse === true ){
    let usr_Int = parseInt(prompt("lets play guess the number. choose a number (hint, check console)"));
    if (usr_Int != 2) {
        window.alert("you got it wrong, try again");
}   else {
     window.alert("you got it right! now we will proceed");
     var isTrue = false;
    }
    
}