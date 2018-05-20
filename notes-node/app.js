console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

const command = argv._[0];
console.log('Command:', command);
console.log('Process:', process.argv)
console.log('Yargs:', argv)

if (command === 'add') {
   const note = notes.addNote(argv.title, argv.body);

   if (note) {
       console.log('Note added');
       console.log('---');
       console.log(`Title: ${note.title}`);
       console.log(`Body: ${note.body}`);       
   } else {
       console.log('Note title allready in use');
   }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const msg = noteRemoved ? 'Note was removed' : "Note not found";
    console.log('---')
    console.log(msg)
} else {
    console.log('Command not recognized');
}
