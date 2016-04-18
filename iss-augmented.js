/*

Augmenting our application

Create a file called iss-augmented.js. It will be similar to iss.js but more difficult!

Augment your ISS application to tell the user how “far” the ISS is from them. Here is how you will do it:

Using the prompt module, ask the user to enter their location (e.g. “montreal”)

Using Google’s Geolocation API, find out the latitude and longitude of the provided location. Here is how:

This URL: https://maps.googleapis.com/maps/api/geocode/json?address=montreal will show the lat/long for montreal

Explore this URL in your web browser to figure out where the lat/lng is located. Try to pass different values for “address” for educational purposes :)

When you are comfortable with finding the location based on an input address, you can then calculate the distance between the ISS and the user:

Look at this URL: http://www.movable-type.co.uk/scripts/latlong.html

It specifies a formula for calculating the distance. Scroll the page to the JavaScript portion, and create a function that uses the provided code. You don’t need to understand what is going on in there, it is very mathy!

NOTE: In order for this code to work, you’ll need to add the following code at the beginning of your program:

  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
Finally, display a message to the user telling them what their “distance” to the ISS is.

Save/commit/push
*/


var prompt = require('prompt');

prompt.start();

prompt.get(['city'], function(err, result) {
    var homeCity = result.city;
    var addressLocator = "https://maps.googleapis.com/maps/api/geocode/json?address=" + homeCity.toLowerCase();
    var request = require("request");

    request(addressLocator, function(err, result) {

        var resultObject = JSON.parse(result.body);
        var homeLat = resultObject.results[0].geometry.location.lat;
        var homeLong = resultObject.results[0].geometry.location.lng;

        var request = require("request");
        var address = "http://api.open-notify.org/iss-now.json";

        request(address, function(err, result) {

            var resultObject = JSON.parse(result.body);

            var issLat = resultObject.iss_position.latitude;
            var issLong = resultObject.iss_position.longitude;
            console.log("Your home city of " + homeCity + " is approximately " +  getDistanceFromLatLonInKm(issLat,issLong,homeLat,homeLong).toFixed(2) + " kilometres from the International Space Station.");

            function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1); // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c; // Distance in km
                return d;
            }

            function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }


        });




    });
});


/*
var request = require("request");
var address = "http://api.open-notify.org/iss-now.json";

request(address, function (err, result) {
    
    var resultObject = JSON.parse(result.body);
    console.log("Latitude: " + resultObject.iss_position.latitude);
    console.log("Longitude: " + resultObject.iss_position.longitude);
    
    
});




function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

*/