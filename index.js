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
