
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/users', (req,res) => {
    const users = [
        {id: 1, name: "Brad"},
        {id: 2, name: "Mike"},
        {id: 3, name: "Eddie"},
        {id: 4, name: "John"},
        {id: 5, name: "Frank"}
    ]
    res.send(users);
});

if(!module.parent) {
    app.listen(3000);
 }


module.exports.app = app;