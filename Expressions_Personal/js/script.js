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
var resultGrossIncome = "Your Goss Income this week is $" + grossIncome;
console.log(resultGrossIncome);

var taxPercentage = 30;
var totalTax = grossIncome * taxPercentage / 100;
var resultTax = "Your tota tax amount this week is $" + totalTax;
console.log(resultTax);

var netIncome = grossIncome - totalTax;
var result = "Your check this week is $" + netIncome;
console.log(resultNetIncome);

var weekOne = prompt(" Please enter the number of hours you worked last week" );
var weekTwo = prompt(" Please enter the number of hours you worked before last week ");
var weekThree = prompt(" Plese enter the number of the hours you worked three weeks ago ");

console.log(weekOne);
console.log(weekTwo);
consoloe.log(weekThree); 

var monthlyHours = weeklyHours[0] + weekOne[1] + weekTwo[2] + weekThree[3];
var montlyResult = "You worked " + monthlyHours + " hours in the last four weeks";
console.log(monthlyResult);




