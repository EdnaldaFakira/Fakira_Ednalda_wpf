//Ednalda Fakira Assignment Functions Personal 05/29/13

//Manufacturing Houses

var houseSize = prompt("Please enter the size of the house you whish to build");//declares variable houseSize and defines value as prompt command to enter house size
var houseModel = prompt("Please enter the model of the house you whish to build");//declares variable houseModel and defines value as prompt command to enter the house model
var garage = prompt("Please, enter yes if you want a garage, or no if you don't want a garage");//declares variable and defines value as prompt command to enter the yes or no
var floor = prompt("Please enter the floor");//declares variable and defines value as prompt command to enter floor choice

var pricePerSqF = function calcHouseSize (area){//declares variable pricePerSqF and defines value as function holding parameter "area"
	var calcAreaPrice = area * 130;//declares variable calAreaPrice and defines value as area * $130
}

var size = pricePerSqF (houseSize);//declares variable size and defines value as pricePerSqF calling function



console.log("The total area of your house will cost $" + calcAreaPrice);//print out the house cost based in the area chose

