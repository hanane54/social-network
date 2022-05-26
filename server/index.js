const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// DB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
  console.log('DB Connected');
})
.catch( (err) => {
  console.log(err);
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// here we can add methods that can perform a mission (send a response) when we access a route.
// it should be above the app.listen
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });
