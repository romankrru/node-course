const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't',
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b',
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('remove', 'Remove note', {
        title: titleOptions
    })
    .command('read', 'Read note', {
        title: titleOptions
    })
    .help()
    .argv;

const command = argv._[0];

if (command === 'add') {
   const note = notes.addNote(argv.title, argv.body);

   if (note) {
       console.log('Note added');
       notes.logNote(note);   
   } else {
       console.log('Note title allready in use');
   }
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s)`);
    
    allNotes.forEach(N => notes.logNote(N));
} else if (command === 'read') {
    const note = notes.getNote(argv.title);

    if (note) {
        console.log('Reading note');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const msg = noteRemoved ? 'Note was removed' : "Note not found";
    console.log('---');
    console.log(msg);
} else {
    console.log('Command not recognized');
}
