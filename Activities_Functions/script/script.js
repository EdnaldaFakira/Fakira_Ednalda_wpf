unction outMsg(){
	console.log("Hello World"); //print the message defines by function
}

var width = 5; //variable scope

 function calcArea(){
 	var width = 20;
 	var height = 30;
 	var area = widht * height; //calculates the variable area by variable width * variable height
 	console.log(area); //print the message defines by function
 }

 calcArea(); //invokes the function
 calcArea();
 calcArea();

console.log(width); //print variable widht