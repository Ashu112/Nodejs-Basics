// 1. we import the http modeule from node environment
const http = require("http");
const axios = require("axios");
//const currenciesJson = require("./currencies.json");

const PORT = 8082;

// 2. create a server
// const server = http.createServer((req,res)=>{
//    console.log("Request incomming...");
//     Activity 3.1 - return the  current date and time
//    const date = new Date().toLocaleDateString();
//     const time = new Date().toLocaleTimeString();
//     res.write(`Server date: ${date} and time: ${time}`);

//     Activity 4.1 Send Server Status
//     const serverInfo = {
//         name : "Crio Server",
//         version: "1.0.0",
//         currentDate : new Date().toLocaleDateString(),
//         currentTime : new Date().toLocaleTimeString(),
//     }
//     res.writeHead(200,{"content-type":"application/json"})
//     res.write(JSON.stringify(serverInfo))
//     res.end();
// })

// Learning req object
// const server = http.createServer((req,res)=>{
//     const serverInfo = {
//         name:"Crio Server",
//         version:"1.0.0",
//         currentDate: new Date().toLocaleDateString(),
//         currentTime: new Date().toLocaleTimeString(),
//     }

//     if(req.url === "/status"){
//         res.writeHead(200,{"content-type":"application/json"});
//         res.end(JSON.stringify(serverInfo));
//     }else{
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end(`<h1>Hello from the server</h1>`);
//     }

// })

// Activity 5.1 Extending Api's
const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`<h1>Currency Database</h1>`);
      break;

    case "/currencies":
      try {
        const response = await axios.get(
          "https://api.coinbase.com/v2/currencies"
        );
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(response.data));
      } catch (error) {
        res.writeHead(500);
        res.end("Something went wrong");
      }
      break;

    default:
      res.writeHead(404);
      res.end();
  }
});

// 3. listen the server on some port
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
