
let number = document.getElementById("number").textContent;
number = Number(number);


//the decrease function
document.getElementById("dec").onclick = function(){

    number--;
    document.getElementById("number").textContent = number;

}

//the increase function
document.getElementById("inc").onclick = function() {
    number++;
    document.getElementById("number").textContent = number;
}

//the reset function
document.getElementById("res").onclick = function(){
    number = 0;
    document.getElementById("number").textContent = number;
}
