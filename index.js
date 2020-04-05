require('newrelic');
const http = require('http');

const nameArr = ["DoubleD","Maribeth","Evan","Russell","DJ"];

/**
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }  
  
async function getName() {
    await sleep(2000);
    return nameArr[Math.floor(Math.random() * nameArr.length)]
}

*/

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello There "+nameArr[Math.floor(Math.random() * nameArr.length)]);
    var i = 0;
    while (i < 1000) {
        i++;
    }

});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
