const fs = require('fs');
const readline = require('readline');
const log = console.log;


let myInterface = readline.createInterface({
  input: fs.createReadStream('./src/Linear.js')
});

let final = ""
myInterface.on('line', function (line) {
if(line.includes("export default")){
    log("export changed to module");
    final += "\n";
    final += line.replace("export default", "module.exports = ")
} else if (line.includes("import")){
    const words = line.split(" ");
    const secondWord = words[1];

    //const  regex = /"(.*)"/;
    const  regex = /"(.*)"/;
    const  route = line.match(regex);
    log("route",route[0]);
    final += "\n";
    final += `const ${secondWord} = require(${route[0]})`;

} else{
    final += "\n";
    final += line;

}   
});


myInterface.on('close', function (line) {
    fs.writeFile("./dist/Linear.js",final, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

});

