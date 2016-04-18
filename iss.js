/*
Getting some data

Create a file called iss.js. In it, write a simple node program that will output the latitude and longitude of the International Space Station.

Practice your google-fu by searching for “iss api” and figuring out the correct URL to use. Hint: there are many options and they are all good :)

Notice that the values provided by the API are very precise. Round off the values to two decimal digits for a nicer display. Hint: toFixed

Save/commit/push


*/

var request = require("request");
var address = "http://api.open-notify.org/iss-now.json";

request(address, displayLatLong);

function displayLatLong(err, result) {
    
    var resultObject = JSON.parse(result.body);
    console.log("Latitude: " + resultObject.iss_position.latitude);
    console.log("Longitude: " + resultObject.iss_position.longitude);
    
    
}


