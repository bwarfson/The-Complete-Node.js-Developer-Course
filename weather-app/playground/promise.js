
const asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};


asyncAdd(4,'4').then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Result: ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});



/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hey. It worked!');
        reject('Unable to fullfill promise');
    }, 2500);
});

promise.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});

*/