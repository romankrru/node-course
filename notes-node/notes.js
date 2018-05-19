const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];

    const note = {
        title: title,
        body: body
    };

    try {
        const notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {}
    
    const duplicateNotes = notes.filter(note => 
        note.title === title
    );

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));    
    }
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = title => {
    console.log('Getting note', title)
}

const removeNote = title => {
    console.log('Removing note', title);
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
};
