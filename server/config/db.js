const mongoose = require("mongoose"); // utilisé pour se connecter 
const config = require("config"); // c'est pour définir un ensemble de paramètres par défaut
const db = "mongodb://localhost:27017/social-app-db";



const connectDB = async () => {
  try {
    //most cases of using 'async await' wrap in a try catch block
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,    n'est pas supporté
    }); // oblige un await puisqu'il retourne une promesse
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Failed to connect: " + err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
