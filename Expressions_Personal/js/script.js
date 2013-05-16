//Ednalda Fakira 05/16/2013 Expressions_Personal


var infoNeed = new Array();
infoNedd [0] = "Your Weekly Hours";
infoNedd [1] = "Your hour rate";


var firstName = prompt(" Please enter your first name ");
var lastName = prompt(" Please enter your last name");
var fullName = firstName + " " + lastName;

var weeklyHours = prompt(" Please enter the number of hours you worked this week ");
var hourRate = prompt(" Please enter the pay rate ");

console.log(fullName);
console.log(weeklyHours);
console.log(hourRate);

var grossIncome = weeklyHours * hourRate;
var resultGrossIncome = "Your Goss Income this week is $" + grossIncome;
console.log(grossIncome);

var taxPercentage = 30;
var totalTax = taxPercentage /  grossIncome * 100;
var resultTax = "Your tota tax amount this week is $" + totalTax;
console.log(resultTax);

var netIncome = grossIncome - totalTax;
var result = "Your check this week is $" + netIncome;
console.log(resultNetIncome);



