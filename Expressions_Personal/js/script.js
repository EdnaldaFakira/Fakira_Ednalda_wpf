//Ednalda Fakira 05/16/2013 Expressions_Personal


var firstName = prompt(" Please enter your first name "); //declares variable and defines as imput value of first name
var lastName = prompt(" Please enter your last name"); //declares variable and defines as imput value of last name
var fullName = firstName + " " + lastName; //declares variable and defines as full name value

var weeklyHours = prompt(" Please enter the number of hours you worked this week "); //declares variable and defines value as imput hours worked this week 
var hourRate = prompt(" Please enter the pay rate "); //declares variable and defines value as imput the pay rate

console.log(fullName); //print out full name value
console.log(weeklyHours); //print out weekly hours worked value
console.log(hourRate); //print out hour rate value

var grossIncome = weeklyHours * hourRate; //declare variable and defines as calculating multipling hour by rate
var resultGrossIncome = "Your Goss Income this week is $" + grossIncome; //declares  variable and defines as expression showing the gross income 
console.log(resultGrossIncome); //print out the resultGrossIncome value

var taxPercentage = 30; //declare variable and defines values as 30
var totalTax = grossIncome * taxPercentage / 100; //declares variable and defines values as the result of the tax amount
var resultTax = "Your total tax amount this week is $" + totalTax; //declares variable and defines the value as an expression showing the totalTax
console.log(resultTax); //print out the resultTax value

var netIncome = grossIncome - totalTax; //declares variable and defines value from the result of grossIncome - totalTax
var resultNetIncome = "Your check this week is $" + netIncome; //declares variable and defines value as an expression showing the netIncome
console.log(resultNetIncome); //print out the resulNetIncome value

var weekOne = prompt(" Please enter the number of hours you worked last week" ); //declares variable and defines value as imput hours from last week 
var weekTwo = prompt(" Please enter the number of hours you worked before last week "); //declares variable and defines value as imput hours fom before last week
var weekThree = prompt(" Plese enter the number of the hours you worked three weeks ago "); //declares variable and defines value as imput hours from three weeks ago

console.log(weekOne); //print out the weekOne value
console.log(weekTwo); //print out the weekTwo value
consoloe.log(weekThree); //print out the weekThree value

var monthlyHours = [weeklyHours, weekOne, weekTwo, weekThree]; //declares variable and defines value by eacht weekly hours from the last four weeks
var monthlyHoursWorked = weeklyHours[0] + weekOne [1] + weekTwo [2] + weekThree[3]; //declares variable and defines value by add all the weekly hours from the last four weeks
var montlyResult = "You worked " + monthlyHoursWorked + " hours in the last four weeks"; //declares variable and defines value as an expression showing the montlyHours value
console.log(monthlyResult); //print out rhe montlyResult value




