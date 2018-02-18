
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

const command = process.argv[2];

if(command == 'add') // node app.js add --title=<text> --body=<text>
{
    const note = notes.addNote(argv.title, argv.body);
    if(note) {
        notes.logNote(note);
    } else {
        console.log('note title taken');
    }
} 
else if (command === 'list') 
{
    const allNotes = notes.getAll();

    console.log(`Printing ${allNotes.length} note(s)`);

    allNotes.forEach(note => notes.logNote(note));
} 
else if (command === 'read') 
{
    const note = notes.getNote(argv.title);
    if(note) {
        notes.logNote(note);
    } else {
        console.log('no note was found');
    }
} 
else if (command === 'remove') 
{
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note was not removed';
    console.log(message);
} 
else 
{
    console.log('command not recognized');
}