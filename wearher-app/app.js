const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a: {
        demand: true, 
        alias: 'address',
        describe: 'Addres to fetch wearcher',
        string: true,
    },
}).help().argv;

const address = argv.a;
const encodedAddress = encodeURIComponent(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBDfNGV1bxI65B30Hf-QZxFDawnyxPv5Hk&address=${encodedAddress}`,
    json: true,
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);    
});