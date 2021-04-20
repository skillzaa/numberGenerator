const fs = require('fs');
const readline = require('readline');
const log = console.log;

fs.readFile('./src/Linear.js', 'utf8', function(err, data) {
    if (err) log(err);
    let d = data.replace("export default", "module.exports = ");
    console.log(d);
    fs.writeFile("./dist/Linear.js", d, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
});
