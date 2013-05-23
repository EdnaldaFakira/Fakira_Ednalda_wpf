//Ednalda Fakira 05/23/2013 Conditional Wacky


var age = prompt("How old are you?");
var state = prompt("Please enter the state you live");
var legal = prompt("Are you citizens or legal resident");
var cost = 50;
var costFlorida = 50 * 6 / 100 + cost;

if (age > = 18 && legal === yes && state === "Florida"){
	console.log("You can get your drive license and the price is $" + costFlorida);
}

if else (age >= 15 && legal === yes && state == "Florida"){
    console.log("You only can get the permit and the  price is 0");
}

if else (age >= 16 && legal === yes && state !=== "Florida"){
console.log("You only can get the permit")
}

else {
	console.log("You can't have drive license yeat");
}

