
console.log('Starting app');

setTimeout(() => {
    console.log('Inside the callback');
}, 2000);

setTimeout(() => {
    console.log('Second setTimeout');
}, 0);

console.log('Finishing up');

/*
Starting app
Finishing up
Second setTimeout
Inside the callback
*/

