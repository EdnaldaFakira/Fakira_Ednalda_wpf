//Ednalda Fakira 05/16/203 Expressions Worksheet Discounts

var originalPrice = 254; //sets the variable and defines it with 254
var description = "bicycle"; //sets the variable and defines it as bicycle
var discountPercentage = 5; //sets the variable and defines it with 5% of discount
var salesTaxPercentage = 6; //sets the variable and defines it with 6% of tax apply
var totalDiscount = discountPercentage / originalPrice * 100; //calulates the total amount of the discount takes it from the originalPrice
var totalWithoutTax =  originalPrice  - totalDiscount; //calulates the total amount after the discount gives
var totalSalesTax = salesTaxPercentage / originalPrice * 100; //calculates the total amount of the tax sales takes
var totalWithTax = totalWithoutTax - totalSalesTax; //calculates the total amount after the dicount gives with the tax percentage 
var result = "Your" + " " + description + " " + "was originally $" + " " + originalPrice + " " + ", but after a" + "" + discountPercentage + "" + " % discount, it is now $" + totalWithoutTax + "without tax, and $" + totalWithTax + "with tax";
console.log(result);