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

if (flightTime 22 >= 6 && destinationEnter === "Florida" || age > 12) {
	console.log("You have a 10% of descount of your flight ticket and your vacation packet is" + totalPrice);
	//customer gets 10% of descount if choose to travel between 10 PM and 6 AM
}
else if (flightTime 22 < 6 && )