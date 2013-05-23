//Ednalda Fakira 05/23/2013 Conditional Personal

var destinationEnter = prompt("Please enter your destination")
var age = prompt("Please enter your age"); //Custormer enter his age
var flightTime = prompt("Please enter the time you want to travel"); //Customer enter the time wish to travel
var hotelDays = prompt("Please enter how many days you want to stay");
var carTakes = hotelDays; //the number of days the customer rent the car is the same of the number of days in the hotel
var hotel = 70; //price the hotel per night
var carRent = 30; //price the car rent per day
var priceTicket = 200; //price of the flight ticket
var totalPrice = priceTicket + hotelDays * hotel + carTakes * carRent; //total price of the vacation packet calculating the priceticket, how many days in a hotel and car rented

if (flightTime 6 =< 22 && destinationEnter === "Florida" || age > 12) {
	console.log("You have a 10% of discount and your vacation packet is $" + totalPrice * 10 / 100);
	//customer gets 10% of discount if choose to travel between 10:00 PM and 6:00 AM
}
else if (flightTime 6 > 22 && destinationEnter === "Florida") {
	console.log("You have 5% of discount and your vacation packet is $" + totalPrice * 5 / 100);
	//traveling betwen 6:00 AM and 9:59 PM to Florida get 5% of discount 
}

else {
	console.log("Your vacation packet price is $" + totalPrice);
	//print the vacation price without discount
}
