// importing a module
let http=require("http");

let server=http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("this is my first server");
    res.end();
})

server.listen(200, function(err) {
    if(err){
        console.log(err);
    }
    else{
        console.log("server started");
    }
})