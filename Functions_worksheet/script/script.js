//Ednalda Fakira Functions Worsheet 05/29/13

//Calculates the circumference of the circle

var totalCircumference = calcCircunference(5);//Defines the variable and defines value as the variable calcCircumference and values as 5 and 2

function calcCircunference(radius){ //Defines the function that hold the parameter radius
var circumference = radius * 3.14;//Defines the variable circumference and defines value as variable diameter / 2.
return circumference //function spitting the info out
}

console.log("The circumference of the circle is" + totalCircumference); //print out the totalCircumference as a message



//Calculates the amount of bee stings to kill an animal

var totalStings =  calcBeeStings(130);//defines the variable totalStings and defines value as variable calcBeeStings as 130 pounds
function calcBeeStings (victimWeight){ //defines function calcBeeStings to store the value as parameter victimWeght
	var beeStings = victimWeight * 8.7; //defines variable beeStings and defines value as victimWeight * 8.7 (number of stings per pound to kill an animal)
	return beeStings //it returns the value in the function
}
console.log("It takes" + totalStings + "to kill a" + victimWeight + "pounds animal");//print out the totalStings required to kill the victimWeight in pounds


