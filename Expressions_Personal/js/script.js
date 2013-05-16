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

var taxPercentage = 30;
var totalTax = taxPercentage /  grossIncome * 100;
console.log(totalTax);

var netIncome = grossIncome - totalTax;
console.log(netIncome);

