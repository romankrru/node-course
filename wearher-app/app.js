const yargs = require("yargs");
const geocode = require("./geocode/geocode.js");

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
