//console.log("hello");
//console.log("mbeguere");

//window.alert("this is an alert");
//window.alert("pizza");

//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent = "ousmane";

//----------------------------
//les variables

/*
let age;
age = 25;

let name = "ousmane2";
let online = true;

console.log(`you are ${age} years old`);
console.log(`the type of age is ` + typeof age);

console.log( `your name is ${name}`); 
console.log(`you are online ${online}`);
*/

//----------------------------

//changer les textes des paragraphes

/*
let fullname = "ousmane mbeguere";
let age = 21;
let student = true;

document.getElementById("p1").textContent = `your name is ${fullname}`;
document.getElementById("p2").textContent = `your age is ${age}`;
document.getElementById("p3").textContent = `you are a student : ${student}`;

*/

//----------------------------

//accept user input

/*
on peut utiliser la methode prompt pour accepter les inputs de l'utilisateur
let username;
username = window.prompt("what is your username: ");

console.log(username);
*/

/*
//on peut utiliser un formulaire dans le html
//on crée une fonction pour le boutton
let username;
document.getElementById("mybutton").onclick = function(){

   username = document.getElementById("myinput").value;
   console.log(username);

   document.getElementById("myh1").textContent =  `welcome ${username}`;

}
*/

//----------------------------

/*
//convertir le type d'une variable

let age = window.prompt("how old are you:");
age = Number(age);
age+=1;
console.log(age,typeof age);
*/

//----------------------------

/*
//les constantes
// c'est un programme qui calcule la circonference d'un cercle et affiche le résultat après
la constante est pi et elle ne peut etre changé
const pi = 3.1415;
let radius;
let circ;


circ = 2*radius*pi;

document.getElementById("mybutton").onclick = function(){
    radius =  document.getElementById("myinput").value;
    radius = Number(radius);
    circ = 2*radius*pi;

    document.getElementById("myh2").textContent = `The circumference is ${circ}` + " cm";

}

*/

//----------------------------
/*

//if statements

document.getElementById("mybutton").onclick = function()
{
    let age = Number(document.getElementById("myinput").value);

    if(age >= 18)
    {
        document.getElementById("myh2").textContent = `you are an adult`;
    }
    else
    {
        document.getElementById("myh2").textContent = `you are a minor`;
    }
}

*/

//----------------------------

/*
//les checkbox
//on utilise "checked"
const checkbox = document.getElementById("mycheckbox");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("mybutton");
const p1 = document.getElementById("myp1");
const p2 = document.getElementById("myp2");

submit.onclick = function(){
    if(checkbox.checked)
    {
        p1.textContent = "You are subscribed";
    }
    else
    {
        p1.textContent = "You are NOT subscribed";
    }

    if(visa.checked)
    {
        p2.textContent = "You are paying with a visa card";
    }else if(master.checked)
    {
        p2.textContent = "You are paying with a master card";
    }else if(paypal.checked)
    {
        p2.textContent = "You are paying with paypal";
    }else
    {
        p2.textContent = "You must choose a payment type";
    }
   
}
    */

//-------------------------
/*
//the ternary operator
let age = 12;
let message = age>18 ? "you are an adult" : "you are a minor";

console.log(message);
*/

//-------------------------

/*
//functions

//a fonction that say happy birthday
function happyBirthday(username,age){
    console.log(`happy birthday ${username}`);
    console.log("beess bou déloussi mo néx");
    console.log(`you are ${age} years old`);
}

//a function to add two numbers
function add(a,b){
    return a+b;
}
 
happyBirthday("samba",22);
console.log(add(2,4));
*/
