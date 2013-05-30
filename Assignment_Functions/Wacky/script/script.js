//Ednalda Fakira Assignment Functions Wacky 05/29/13

//Shipping Carton Boxes

var boxQt = prompt("Please enter the quantity of boxes");//declares variable boxQt and defines value as prompt command to enter quantity
var boxWidth = prompt("Please enter the width");//declares variable boxWidth and defines value as prompt command to enter width
var boxHight = prompt("Please enter hight");//declares variable boxHight and defines value as prompt command to enter hight
var boxColor = prompt("Please enter the color");//declares variable boxColor and defines value as prompt to enter color
var boxType = prompt("Please enter the type of box");//declares variable boxType and defines value as prompt to enter type


var boxSize = function calcBoxSize (width, height){ //declares variable boxSize and defines value as function calcBoxSize to hold parameter
	var calcArea = width * height;//declares variable calcArea and defines value as width * height
	return calcArea;//returns the value from variable calcArea
}
 var size = boxSize(boxWidth, boxHight);//declares variable size and defines value as boxSize values holding
 console.log(size);//print out value of variable size

 var price = size * 0.25 * 6 / 100;//declares variable price and defines value as size * $.25 + 6% tax


 var customerName = prompt("Please enter your full name");//declares variable customerName and defines value as prompt command to enter full name
 var customerAddress = prompt("Please enter your address");//declares variable customerAddress and defines value as prompt command to enter address
 var customerState = prompt("Please enter your State");//declares variable customerstate and defines value as prompt command to enter state
 

 if(boxColor = "white" && boxType = "pizza" && customerState = "California"){//decides statement choose color, type, and state
 	console.log("we can ship you pizza box and will cost $" + price);// print out message "we can ship you pizza box and will cost $" + price
 }

 if else(boxQt = "" || boxWidth = "" || boxHight = "" || boxColor = "" || boxType = ""){//decides statement to enter information
 	console.log("Please enter information");//print out the message "Please enter information"
 }

 else{//decides statement
 	console.log("We can't ship your boxes");// print out the message "We can't ship your boxes"
 }


