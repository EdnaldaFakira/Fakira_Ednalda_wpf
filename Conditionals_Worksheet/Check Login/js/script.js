//Ednalda Fakira 05/23/2013 Conditionals Worksheet - Check the login


var userName = prompt("Please enter your user name"); //user imput the username 
var password = prompt("Please enter your password"); //user imput the password
var correctPassword; //password storaged
var correctUserName; //username storaged

if(userName == correctUserName && password != correctPassword){
 console.log("Password does match our records."); //username matches but the password doesn't match
} 

else if (password == correctPassword && userName != correctName){
 console.log("User not found. Try again."); //password matches but username doesn' match
}

else {console.log("Welcome," + correctUserName); //password and username match
}

