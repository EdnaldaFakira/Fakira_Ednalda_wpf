//Ednalda Fakira  05/16/2013 Expressions_industry

var infoNeed = new Array(); //variable defines as array
infoNeed [0] = "Your photo dimensions"; //first position on the array
infoNeed [1] = "Your photo dpi"; //second position on the array
totalInfoNeed = "Your photo dimensions " [0] + "Your photo dpi" [1]; //the total of the addition of all position of the array
console.log(totalInfoNeed); //print out the result of the total 


var  width = prompt(" Please enter the width of the photo "); //imput the width value
var height = prompt(" Please enter the height of the photo "); //imput the height value
var  dpi   = prompt(" Please enter the dpi of the photo "); //imput the dpi value

console.log(width); //print out the width value
console.log(height); //print out the height value
console.log(dpi); //print out the dpi value

var resolution = (width * dpi) * (height * dpi); //declares and defines the resolution variable as a result of calculating values
var resultPixel = "The resolution of your photo is " + resultion + "pixels"; //declares the variable that show as a expression the resolution
console.log(resultPixel); //print out the resolution  

