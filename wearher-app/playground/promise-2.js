const request = require("request");

const geocodeAddress = a =>
  new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(a);

    request(
      {
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBDfNGV1bxI65B30Hf-QZxFDawnyxPv5Hk&address=${encodedAddress}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject("Unable to connect to Google servers.");
        } else if (body.status === "ZERO_RESULTS") {
          reject("Unable to find that address.");
        } else if (body.status === "OK") {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }
      }
    );
  });

geocodeAddress("19146")
  .then(r => console.log(r))
  .catch(error => console.log(error));
