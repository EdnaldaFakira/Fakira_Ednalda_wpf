//Ednalda Fakira  05/16/2013 Expressions_industry

var infoneed = new Array();
infoneed [0] = "Your photo dimensions";
infoneed [1] = "Your photo pixelsm or dpi";


var  width = prompt(" Please enter the width of the photo ");
var height = prompt(" Please enter the height of the photo ");
var  dpi   = prompt(" Please enter the dpi of the photo ");

console.log(width);
console.log(height);
console.log(dpi);

var resolution = (width * dpi) * (height * dpi);
var resultPixel = "The resolution is " + resultion + "pixels";
console.log(resultPixel); 

