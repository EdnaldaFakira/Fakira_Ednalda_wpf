//Ednalda Fakira 05/23/2013 Conditional Wacky


var age = prompt("How old are you?"); //declares the variable age and defines value as prompt
var state = prompt("Please enter the state you live"); 
var legal = prompt("Are you citizens or legal resident");
var cost = 50;
var costFlorida = 50 * 6 / 100 + cost;
var costOtherState = 50 * 8 / 100 + cost;

if (age >= 18 && legal === yes && state === "Florida"){
	console.log("You can get your driver license. The price is $" + costFlorida);
}

if (age >= 18 && legal === yes && state !=== "Florida"){
	console.log("You can get your driver license. The price is $" + costOtherState);
}

if else (age >= 15 && legal === yes && state == "Florida"){
    console.log("You only can get the permit. The  price is 0");
}

if else (age >= 16 && legal === yes && state !=== "Florida"){
console.log("You only can get the permit. The price is 0");
}

if else (age === "" || state === "" || legal === ""){
 	console.log("Please enter the information");
 }

else {
	console.log("You can't have driver license yeat");
}

