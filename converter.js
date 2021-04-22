const fs = require('fs');
const path = require('path');
const readline = require('readline');
const log = console.log;
const  EXTENSION = '.js';

/////////////////////setup/////////////////////////////////////
const homeDir = "./src";
const targetDir = "./testSrc";
/////////////////////setup/////////////////////////////////////
const dir = __dirname + targetDir.substring(1);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, 0744);
}
///////////////////////////////////////////////////////////////
fs.readdir(homeDir, (err, files) => {

    let targetFiles = files.filter(function(file) {
        return path.extname(file).toLowerCase() === EXTENSION;
    });

    targetFiles.forEach(file => {
        convertFileToCjs(file,homeDir,targetDir);
    });
});


function convertFileToCjs(fileName,homeDir,targetDir){
////////////////////////////////////////////////////////

let myInterface = readline.createInterface({
    input: fs.createReadStream(`${homeDir}/${fileName}`)
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
      final += `const ${secondWord} = require(${route[0]});`;
  
  } else{
      final += "\n";
      final += line;
  
  }   
  });
  
  
  myInterface.on('close', function (line) {
      fs.writeFile(`${targetDir}/${fileName}`,final, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
      });
  
  });
  
////////////////////////////////////////////////////////
}