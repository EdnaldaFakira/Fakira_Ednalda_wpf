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


 