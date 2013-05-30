//Ednalda Fakira Assignment Functions Wacky 05/29/13

//Shipping Carton Boxes

var boxQt = prompt("Please enter the quantity of boxes");
var boxWidth = prompt("Please enter the width");
var boxHight = prompt("Please enter hight");
var boxColor = prompt("Please enter the color");
var boxType = prompt("Please enter the type of box");


var boxSize = function calcBoxSize (width, height){
	var calcArea = width * height;
	return calcArea;
}
 var size = boxSize(boxWidth, boxHight);
 console.log(size);

 var price = size * 0.25 * 6 / 100;



 var customerName = prompt("Please enter your full name");
 var customerAddress = prompt("Please enter your address");
 var customerState = prompt("Please enter your State");
 

 if(boxColor = "white" && boxType = "pizza" && customerState = "California"){
 	console.log("we can ship you pizza box and will cost $" + price);
 }

 if else(boxQt = "" || boxWidth = "" || boxHight = "" || boxColor = "" || boxType = ""){
 	console.log("Please enter information");
 }

 else{
 	console.log("We can't ship your boxes");
 }


