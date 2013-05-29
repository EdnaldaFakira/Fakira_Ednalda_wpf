//Ednalda Fakira Functions Worsheet 05/29/13



//Calculates the circumference of the circle

var totalCircumference = function calcCircumference(radius){ //Defines the variable totalCircumference and defines value as function calcCircumference as the parameter "radius"

var circumference = radius * 3.14;//Defines the variable circumference and defines value as radius * 3.14 (circumference / diameter = Pi 3.14 "always").
return circumference; //function spitting the info out
}

var c = totalCircumference(5); 

console.log("The circumference of the circle is" + c + "cm");//print out the totalCircumference as a message



//Calculates the amount of bee stings to kill an animal

var totalStings =  function calcBeeStings (victimWeight){ //defines function calcBeeStings to store the value as parameter victimWeghtcalcBeeStings(130);//defines the variable totalStings and defines value as variable calcBeeStings as 130 pounds

	var beeStings = victimWeight * 8.7; //defines variable beeStings and defines value as victimWeight * 8.7 (number of stings per pound to kill an animal)
	return beeStings //it returns the value in the function
}
 var s = totalStings (130);
console.log("It takes" + totalStings + "to kill a" + victimWeight + "pounds animal");//print out the totalStings required to kill the victimWeight in pounds


