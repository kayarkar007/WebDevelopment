//Renaming  a file

let file=require("fs");

let Rename=file.rename("readingFile.js","Readingfile.js",(err)=>{
    if(err){console.log(err);console.log("file Renamed")}
})
console.log(Rename);