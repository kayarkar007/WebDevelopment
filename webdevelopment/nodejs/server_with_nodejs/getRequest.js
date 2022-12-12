// importing a module
let http=require("http");

let server=http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("this is my first server");
    res.end();
})

server.listen(9000, ()=> {
   console.log("server started");
})

server.on('request',(req,res)=>{
    console.log("event fired");
})