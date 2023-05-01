
const fs = require('fs');
const tmi = require('tmi.js');
var path = require('path');

//temp log folder - chat message 
folder = path.resolve(__dirname) + '\\log\\';

// tmi.js load
const client = new tmi.Client({
    channels: ['32comma'] //<-- channel name
});

//channel connect
client.connect();

console.log('Server is running ');


client.on('message', (channel, tags, message, self) => {
    //let content = `${tags['display-name']}: ${message}\n`;


    // set chat message log folder -- timestamp save
    fs.writeFile(folder + `${new Date().getTime()}.txt`,
        message, { flag: 'a+' }, err => { });
    console.log(message);
});

