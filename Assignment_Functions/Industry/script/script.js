//Ednalda Fakira Assignment Functions Industry 05/29/13

//Website Cost

var pagesNumber = prompt("Please, enter the number of pages for your website");// declares variable pagesNumber and defines value as prompt command of number of page needed for website
var websiteTitle = prompt("Please, enter the title of your website");//declares variable customerTitle and defines value as prompt command of the title for website 
var customerName = prompt("Please, enter your full name");//declares variable customerName and defines the value as prompt command of customer full name
var customerEmail = prompt("Please, enter your email address");//declares variable customerEmail and defines value as prompt command of email address
var customerPassword = prompt("Please, enter your password");//declares variable customerPassword and defines value as prompt command of password

//function calcArea ();
//var totalPages = pagesNumber * 20;
//return totalPages;
//console.log(calcArea);

var calcArea = function(pages, price){//declares variable calcArea and defines value as function with parameters "pages" and "price"
	var area = pages * price;//declares variable area and defines value as pages * price
	return area;//declares the return as returning the value equal to the area value
}
var a = calcArea(pagesNumber, 20);//declares variable and defines value as calcArea  
console.log(a);//print out a value


