//Ednalda Fakira Assignment Functions Industry 05/29/13

//Website Cost

var pagesNumber = prompt("Please, enter the number of pages for your website");// declares variable pagesNumber and defines value as prompt command of number of page needed for website
var websiteTitle = prompt("Please, enter the title of your website");//declares variable customerTitle and defines value as prompt command of the title for website 
var customerName = prompt("Please, enter your full name");//declares variable customerName and defines the value as prompt command of customer full name
var customerEmail = prompt("Please, enter your email address");//declares variable customerEmail and defines value as prompt command of email address
var customerPassword = prompt("Please, enter your password");//declares variable customerPassword and defines value as prompt command of password
var videos = prompt("Please, enter yes or no if you want videos")//declares variable videos and defines value as prompt command of yes or no

function calcArea ();
var totalPages = pagesNumber * 20;
return totalPages;
console.log(calcArea);

//var calcPrice = function(pages, price){//declares variable calcArea and defines value as function with parameters "pages" and "price" while code runs
	//var initialPrice = (pages * price) * 6 / 100;//declares variable area and defines value as pages * price + 6% tax
	//return initialPrice;//declares the return as returning the value equal to the area value
//}
//var p = calcPrice(pagesNumber, 20);//declares variable and defines value as calcArea as invoking function 

//console.log(p);//print out a value

var initialPrice = totalPages * 6 / 100;//declares variable initialPrice and defines values as totalPages + 6% tax

var totalCost = (totalPages + 50) * 6 / 100;//declares variable totalCost and defines value as initialCost + $50 for videos cost + 6% tax


videos = (no) ? console.log (" Your basic website is $" + initialPrice + "included tax with " + pagesNumber + " pages, " + websiteTitle + "as website title for" + customerName) : console.log("Your website price is $" + totalCost + "included tax with " + pagesNumber + " pages, " + websiteTitle + "as website title for " + customerName);//if statement makes decision and print out initialCost or totalCost  + customer information