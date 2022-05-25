const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// const path = require("path");

// // initialize the middleware
// server.use(express.json({ extended: false }));

// server.get("/", (request, response) => {
//   response.send("This is the express server");
// });

// // define the routes:
// server.use("/api/")

// server.get("/time", (req, response) => {
//   const time = new Date().toString();
//   response.send(time);
// });

// server.listen(5000, () => {
//   console.log("Server is running at 5000");
// });

let users = [
    {
        firstName:"John",
        lastName:"Doe",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        id:1
    },
    {
        firstName:"Hyun",
        lastName:"Namkoong",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        id:2
    },
    {
        firstName:"Hannah",
        lastName:"Rickard",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        id:3
    }
]

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('<h1>Test Express</h1>')
})
app.get('/api/users', (request, response)=>{
    console.log('You made a GET request: ', request.body);
    response.send({
        type:'GET',
        firstName:response.body.firstName,
        lastName: response.body.lastName,
    });
})

const PORT = 3005
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})