var CountDownDate=new Date("mar 9, 2024 00:00:00").getTime();
// Update the Countdown every second
var x=setInterval(function() {
//get todays date and time
var now = new Date().getTime();
var distance = CountDownDate - now;
var DAYS=Math.floor(distance/(1000*60*60*24));
var HOURS=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var MINS=Math.floor((distance%(1000*60*60))/(1000*60));
var SECS=Math.floor((distance%(1000*60))/1000);
// Output the result in an element with id="demo"
document.getElementById("DAYS").innerHTML=DAYS+ "\nDays";
document.getElementById("HOURS").innerHTML=HOURS+"\nHrs";
document.getElementById("MINS").innerHTML=MINS+ "\nMins";
document.getElementById("SECS").innerHTML=SECS+"\nSecs";
if(distance<0) {
    clearInterval(x);
    document.getElementById("Countdown-container").innerHTML="This giveaway has Expired";
}
}, 1000);