const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

// here we can add methods that can perform a mission (send a response) when we access a route.
// it should be above the app.listen 
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });
