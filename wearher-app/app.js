const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

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
    return;
  }

  weather.getWeather(result.latitude, result.longitude, (err, temperature) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Temperature for ${result.address}:`);
    console.log(`${temperature} F`);
  });
});
