// const http = require("http");

// const server = http.createServer((req, res) => {
    
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Sheetal");
// });

// server.listen(4000);

const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === "/home"){
      res.write("<html>");
      res.write("<head><title>My first page</title></head>");
      res.write("<body><h1>Welcome to Home</h1></body>");
      res.write("</head>");
      return res.end();  
    }else if(url === "/about"){
       res.write("<html>");
       res.write("<head><title>My first page</title></head>");
       res.write("<body><h1>Welcome to About page</h1></body>");
       res.write("</head>");
       return res.end(); 
    }else if(url === "/node"){
         res.write("<html>");
       res.write("<head><title>My first page</title></head>");
       res.write("<body><h1>Welcome to my Node Js project</body>");
       res.write("</head>");
       return res.end(); 
    }else{
       res.setHeader("Content-Type","text/html");
   res.write("<html>")
   res.write("<head><title>My first page</title></head>")
   res.write("<body><h1>Welcome to my Node Js project</h1></body>")
   res.write("</head>")
   res.end() 
    }
   
})

server.listen(4000)