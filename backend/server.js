const express = require("express");
const connectDB = require("../config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//Connexion à MONGODB
connectDB()

const app = express();

//Middleware qui permet de traiter les donnée de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Récupération de la rooute /post via le chemin où les routes sont
app.use("/post", require("./routes/post.routes"));

// Lancer serveur
app.listen(port, () => console.log("Connect port " + port));
