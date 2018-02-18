const request = require('request');


const geocodeAddress = (address) => {
    
    return new Promise((resolve, reject) => {

        const encodedAddress = encodeURIComponent(address);
        
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB_8ZDjvRstT43-ULGZEH7f3N_rQ4YsRBo`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find address');
            } else if (body.status === 'OK') {
                //console.log(JSON.stringify(body, undefined, 2));
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('83642').then((location) => {
    console.log(location);
}, (errorMessage) => {
    console.log(errorMessage);
});