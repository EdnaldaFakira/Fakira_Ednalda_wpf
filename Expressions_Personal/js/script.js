//Ednalda Fakira 05/16/2013 Expressions_Personal

var firstName = prompt(" Please enter your first name ");
var lastName = prompt(" Please enter your last name");
var fullName = firstName + " " + lastName;

var weeklyHours = prompt(" Please enter the number of hours you worked this week ");
var hourRate = prompt(" Please enter the pay rate ");

console.log(fullName);
console.log(weeklyHours);
console.log(hourRate);

var grossIncome = weeklyHours * hourRate;
console.log(grossIncome);

var taxPercentage = 30;
var totalTax = taxPercentage /  grossIncome * 100;
console.log(totalTax);

var netIncome = grossIncome - totalTax;
var result = "Your check this week is $" + netIncome;
console.log(resultNetIncome);

var infoNeed = new Array();
infoNedd [0] = "Your Weekly Hours";
infoNedd [1] = "Your hour rate";


