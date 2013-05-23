//Ednalda Fakira 05/23/2013 Conditional Industry

var windowWidth = prompt("Please enter the width"); //enter the width value
var windowHeight = prompt("Please enter the height"); //enter the height value
var windowSize = windowWidth * windowHeight; //variable windowSize calcules the windowWidth times windowHeight

if (windowWidth === windowHeight){
	console.log("Your window is square with" + windowSize + "sq");
	//print the value as a message and the area of the window
}

if else (windowHeight > windowWidth || windowWidth > windowHeight){
	console.log("Your window is rectangle" + windowSize + "sq");
	//print the value as a message  showing that the window is a rectagle and the area of the window 
}


else (windowHeight == "" || windowWidth == ""){
	console.log("You need to enter width and height");
}
