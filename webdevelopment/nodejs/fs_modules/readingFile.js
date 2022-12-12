//reading a file
let file=require("fs");

let readFile=file.readFile("Creating_file_using_fsModule.js",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})