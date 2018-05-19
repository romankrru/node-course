console.log('starting app');

const fs = require('fs');
const os = require('os');

const userName = os.userInfo().username;

fs.appendFile('greetings.txt', `Hello ${userName}! \n`, err => {
    if (err)
        console.log(err);
});