const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");
const axios = require("axios");

const key = "927be538d8b2dc4836bd99754c2a74ed";

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Addres to fetch wearcher",
      string: true
    }
  })
  .help().argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBDfNGV1bxI65B30Hf-QZxFDawnyxPv5Hk&address=${encodedAddress}`;

axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data.status === "ZERO_RESULTS")
      throw new Error("Unable to find address.");

    const formatedAddress = response.data.results[0].formatted_address;
    const latitude = response.data.results[0].geometry.location.lat;
    const longitude = response.data.results[0].geometry.location.lng;

    console.log(formatedAddress);

    return axios.get(
      `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`
    );
  })
  .then(weather => {
    console.log(weather.data.currently.temperature);
  })
  .catch(e => {
    if (e.code === "ENOTFOUND") {
      console.log("Unable to connect to api service");
    } else {
      console.log(e.message);
    }
  });
