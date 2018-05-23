const request = require("request");

const getWeather = (latitude, longitude, callback) => {
  const key = "927be538d8b2dc4836bd99754c2a74ed";

  request(
    {
      url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, body.currently.temperature);
      } else {
        callback("Unable to fetch wearher");
      }
    }
  );
};

module.exports = {
  getWeather: getWeather
};
