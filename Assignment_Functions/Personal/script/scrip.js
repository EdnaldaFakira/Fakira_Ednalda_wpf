//Ednalda Fakira Assignment Functions Personal 05/29/13

//Manufacturing Houses

var houseSize = prompt("Please enter the size of the house you whish to build");//declares variable houseSize and defines value as prompt command to enter house size
var garage = prompt("Please, enter yes if you want a garage, or no if you don't want a garage");//declares variable and defines value as prompt command to enter the yes or no


var pricePerSqF = function calcHouseSize (area){//declares variable pricePerSqF and defines value as function holding parameter "area"
	var calcAreaPrice = area * 130;//declares variable calAreaPrice and defines value as area * $130
}

var size = pricePerSqF (houseSize);//declares variable size and defines value as pricePerSqF calling function



console.log("The total area of your house will cost $" + calcAreaPrice);//print out the house cost based in the area chose

var totalHouse = calcAreaPrice + 20,000;//declares variable toralHouse and defines value as calArePrice + $20,000

if(garage = yes && houseSize != "")//decides if wants garage
	console.log("We can build your house for $" + totalHouse);//print out the total value of the house
}

if else(garage = no && house != ""){//decides if don't want the garage 
	console.log("We can build your house for $" + calAreaPrice);//print out the value of the house
}

else{
	console.log("You need to enter the size of the house and decide if you want garage");//print out the message to reminder client to enter information required 
}