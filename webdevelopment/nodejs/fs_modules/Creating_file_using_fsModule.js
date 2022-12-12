// Importing fs module 
let file=require("fs");

// let createFile=file.writeFile("readingFile.js","//reading a file",(err)=>{
//     if(err){console.log(err)};
//     console.log("file created")
// })


let createFile=file.writeFile("Rename.js","//Renaming  a file",(err)=>{
    if(err){console.log(err)};
    console.log("file created")
});