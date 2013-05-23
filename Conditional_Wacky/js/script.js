//Ednalda Fakira 05/23/2013 Conditional Wacky


var age = prompt("How old are you?"); //declares the variable age and defines value as prompt
var state = prompt("Please enter the state you live"); //dclares the variable state and defines value as prompt as state
var legal = prompt("Are you citizens or legal resident");//declares the variable legal and defines value as prompt to enter the legal status
var cost = 50; //declares the variable cost and defines value as 50
var costFlorida = 50 * 6 / 100 + cost; //declares the variable costFlorida and defines value as 50 + 6%
var costOtherState = 50 * 8 / 100 + cost; //declares the variable costOtherState and defines value as 50 + 8%

if (age >= 18 && legal === yes && state === "Florida"){
	console.log("You can get your driver license. The price is $" + costFlorida);
	//condition to get driver license. Print message "you can get your driver license" and the price in Florida
}

if (age >= 18 && legal === yes && state !=== "Florida"){
	console.log("You can get your driver license. The price is $" + costOtherState);
	//condition to get driver license. Print message "You can get your driver license" and the price in other states
}

if else (age >= 15 && legal === yes && state == "Florida"){
    console.log("You only can get the permit. The  price is 0");
    //condition to get permit. Print the message "You only can get the permit" and the price in Florida
}

if else (age >= 16 && legal === yes && state !=== "Florida"){
console.log("You only can get the permit. The price is 0");
//conditon to get the permit. Print the message "You only can get the permit" and the price is 0
}

if else (age === "" || state === "" || legal === ""){
 	console.log("Please enter the information");
 	//condition  as any empty prompt to get the message "Please enter the information"
 }

else {
	console.log("You can't have driver license yet");
	//condition to anything else wil get the message "Yu can't have driver license yet"
}

