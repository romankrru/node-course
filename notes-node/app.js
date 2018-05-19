console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('str'));
const filteredArray = _.uniq(['str', 'str', 1, 2, 3, 1, 2, 4])
console.log(filteredArray)

// console.log('Result:', notes.add(12, 3))

// fs.appendFile(
//     'greetings.txt',
//     `Hello ${userName} \n`,
//     err => {
//         if (err)
//             console.log(err);
//     }
// );