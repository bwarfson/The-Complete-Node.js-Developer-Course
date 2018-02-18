
const fs = require('fs');

const fetchNotes = () => {
    try {
        const noteString = fs.readFileSync('notes.json');
        return notes = JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title: title,
        body: body
    };
    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
};

const getNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

const removeNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    console.log('__');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};