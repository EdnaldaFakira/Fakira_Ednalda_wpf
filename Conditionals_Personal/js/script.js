//Ednalda Fakira 05/23/2013 Conditional Personal

var age = prompt("Please enter your age"); //Custormer enter his age
var flightTime = prompt("Please enter the time you want to travel"); //Customer enter the time wish to travel
var hotelDays = prompt("Please enter how many days you want to stay");
var carTakes = hotelDays; //the number of days the customer rent the car is the same of the number of days in the hotel
var hotel = 70; //price the hotel per night
var carRent = 30; //price the car rent per day
var priceTicket = 200; //price of the flight ticket
var totalPrice = priceTicket + hotelDays * hotel + carTakes * carRent; //total price of the vacation packet calculating the priceticket, how many days in a hotel and car rented
 
if (flightTime 22 >= 6) {
	console.log("You have a 10% of descont of your  flight ticket");
	//customer gets 10% of descont if choose to travel betwee 10 PM and 6 AM
}
else if ()