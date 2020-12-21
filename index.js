const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    if (request.url === "/write") {
        fs.writeFile("data.txt", "anna", (err) => {
            if (err) {
                console.log(err);
                response.end();
                return;
            }
            response.write("file created!");
            response.end();
        });
    }
    else if (request.url === "/delete") {
        fs.unlink("data.txt", (err) => {
            if (err) {
                response.write(`${err}`);
                response.end();
                return;
            }
            response.write("file deleted!");
            response.end();
        });
    }
    else if (request.url === "/dice") {
        const randomNum = Math.floor(Math.random() * 6  + 1);
        
        // const randomNum = randNum();
        response.write(`${randomNum}`);
        if(randomNum === 4){
            response.write("\nYou Won!");
            response.end();
            return;
        }
        else{
            response.write("\nYou lost!");
            response.end();
        }
        response.end();
    }
    else {
        response.write("unauthorized");
        response.end();
    }


}).listen(8080);

console.log("listening on: http://localhost:8080");

// function randNum(){
//     const randomNum = Math.floor(Math.random() * 6  + 1);
//     return randomNum;
// }