const fs= require("fs");
const path =require ("path")

const exampleFolder=path.join(__dirname,"exampleFolder");
if(!fs.existsSync(exampleFolder)){
    fs.mkdirSync(exampleFolder);
}

const exampleFile=path.join(exampleFolder,"exampleFile")

const fileContent="This is the text to be placed inside the exampleFile";

fs.writeFileSync(exampleFile,fileContent);

console.log("File Created Successfully")

const content=fs.readFileSync(exampleFile,'utf8');

console.log("File content : ", content);

fs.appendFileSync(exampleFile,"\n This is the new content added to the file");

console.log("File content : ", content);