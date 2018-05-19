console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log('Result:', notes.add(12, 3))

// const userName = os.userInfo().username;

// fs.appendFile(
//     'greetings.txt',
//     `Hello ${userName} \n`,
//     err => {
//         if (err)
//             console.log(err);
//     }
// );