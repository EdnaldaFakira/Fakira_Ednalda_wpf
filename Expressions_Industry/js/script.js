//Ednalda Fakira  05/16/2013 Expressions_industry


var  width = prompt(" Please enter the width of the photo "); //imput the width value
var height = prompt(" Please enter the height of the photo "); //imput the height value
var  dpi   = prompt(" Please enter the dpi of the photo "); //imput the dpi value

console.log(width); //print out the width value
console.log(height); //print out the height value
console.log(dpi); //print out the dpi value

var resolution = (width * dpi) * (height * dpi); //declares and defines the resolution variable as a result of calculating values
var resultPixel = "The resolution of your photo is " + resolution + " pixels per total sq ft"; //declares the variable that show as a expression the resolution
console.log(resultPixel); //print out the resolution  

var sqFt = [width, height]; //declares variable and defines value as array
var totalSqFt = width [0] * height[1]; //declares variable and defines value multiplying width by height positions
var resultArea = " The total area of your photo is " + totalSqFt + "sqFt";
console.log(totalSqFt); //print out totalSqFt value
