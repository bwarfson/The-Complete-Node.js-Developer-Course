
const request = require('request');

const getForcast = (latitude, longitude, callback) => {
    console.log(`https://api.darksky.net/forecast/83712d7644d84be8e9d49760684cab9b/${latitude},${longitude}`);
    request({
        //https://api.darksky.net/forecast/[key]/[latitude],[longitude]
        url: `https://api.darksky.net/forecast/83712d7644d84be8e9d49760684cab9b/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            //console.log(JSON.stringify(body.currently, undefined, 2));
            callback(undefined, {
                temperature: body.currently.temperature,
                summary: body.currently.summary,
                precipProbability: body.currently.precipProbability,
                apparentTemperature: body.currently.apparentTemperature,
                windSpeed: body.currently.windSpeed,
                windGust: body.currently.windGust
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports = {
    getForcast
};