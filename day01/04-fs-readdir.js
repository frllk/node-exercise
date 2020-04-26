const fs = require('fs');
fs.readdir('./code', (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});