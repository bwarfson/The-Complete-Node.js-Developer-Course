const obj = {
    name: 'Brad'
};

const stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

const personString = '{"name": "Brad", "age": 25}';
const personObj = JSON.parse(personString);
console.log(typeof personObj);
console.log(personObj);

const fs = require('fs');

const originalNote = {
    title: 'Some title',
    body: 'Some body'
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);
console.log(typeof note);


note.title = 'Brad';
console.log(note.title);



