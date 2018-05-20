const fs = require('fs');

const fetchNotes = () => {
    let notes = [];

    try {
        const notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {}

    return notes;
};

const saveNotes = (notes) => {
    fs.writeFileSync(
        'notes-data.json',
        JSON.stringify(notes)
    );        
};

const addNote = (title, body) => {
    const notes = fetchNotes();

    const note = {
        title: title,
        body: body
    };
    
    const duplicateNotes = notes.filter(note => 
        note.title === title
    );

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = title => {
    const notes = fetchNotes();
    const note = notes.filter(N => N.title === title)[0];
    return note;
}

const removeNote = title => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter(N => N.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

const logNote = note => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);   
}

module.exports = {
    logNote: logNote,
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
};
