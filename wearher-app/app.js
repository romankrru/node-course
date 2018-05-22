const yargs = require("yargs");
const geocode = require("./geocode/geocode.js");
const request = require("request");

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

geocode.geocodeAddress(argv.a, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(result, undefined, 2));
  }
});

const key = "927be538d8b2dc4836bd99754c2a74ed";
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
const latitude = "47.2357137";
const longitude = "39.701505";

request(
  {
    url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
    json: true
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
    } else {
      console.log("Unable to fetch wearher");
    }
  }
);
