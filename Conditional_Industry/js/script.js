//Ednalda Fakira 05/23/2013 Conditional Industry

var windowWidth = prompt("Please enter the width"); //enter the width value
var windowHeight = prompt("Please enter the height"); //enter the height value
var windowColorEnter = prompt("Please enter the window color: white, black or blue"); //enter the color as white, black or blue
var windowColor = "white"; //variable windowColor defines the value as "white"
var windowSize = windowWidth * windowHeight; //variable windowSize calcules the windowWidth times windowHeight

if (windowWidth === windowHeight && windowColorEnter === "black" || windowColorEnter === "blue"){
	console.log("Your window is square with" + windowSize + "sq and is good for commercial websites");
	//print the value as a message and the area of the window
}

if else (windowHeight > windowWidth || windowWidth > windowHeight && windowColorEnter === "white"){
	console.log("Your window is rectangle" + windowSize + "sq and is good for educational websites");
	//print the value as a message showing that the window is a rectagle and the area of the window 
}


else (windowHeight == "" || windowWidth == "" || windowColorEnter === "" ){
	console.log("You need to enter width and height");
	//print a message to remenber to enter the width and height to calculetes the area, and the color
}
