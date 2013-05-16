//Ednalda Fakira 05/16/2013 Expressions Worksheet Average shopping bill

var weeklyGroceries = [189, 81,123,150,108];//sets the variable and defines the values
var totalSpent = weeklyGroceries[0] + weeklyGroceries[1] + weeklyGroceries[2] + weeklyGroceries[3] + weeklyGroceries[4]; //calculates the total of groceries spent in 5 weeks
var average = totalSpent / 5; //calculates the average of the total spent in graceries per week
var result = "You have spent a total of $ " +  totalSpent + " on groceries over 5 weeks. That is the average of $ " + average +  " per week"; //show the total amount spent and the average per week in complete expression
console.log(result); //Print the result 