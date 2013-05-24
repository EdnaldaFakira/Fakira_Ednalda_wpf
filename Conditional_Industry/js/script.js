//Ednalda Fakira 05/23/2013 Conditional Industry

var windowWidth = prompt("Please enter the width"); //enter the width value
var windowHeight = prompt("Please enter the height"); //enter the height value
var windowColorEnter = prompt("Please enter the window color: white, black or blue"); //enter the color as white, black or blue
var windowSize = windowWidth * windowHeight; //variable windowSize calcules the windowWidth times windowHeight

(windowWidth === windowHeight && windowColorEnter === "black" || windowColorEnter === "blue") ? console.log("Your window is square with" + windowSize + "sq and is good for commercial websites") : console.log("Your window is rectangle" + windowSize + "sq and is good for educational websites");
	//print the value as a message showing that the window is a square, the area of the window, and is good for commercial websites 
	//print the value as a message showing that the window is a rectagle, the area of the window, and is good for educational websites

