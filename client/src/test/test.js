const chords = require('./json-obj/tmp/test.json')
const fs = require('fs')
const path = require('path')

console.log(chords.b.shortName)

const newObj = {}

for (let key in chords) {
    newObj[chords[key].shortName] = chords[key].url
}

console.log(newObj)

fs.writeFile(path.resolve(__dirname, "shortName-url.json"), JSON.stringify(newObj), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
