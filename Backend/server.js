import mongoose from "mongoose";
import express from "express";
import cors from 'cors';

import booksRoutes from "./routes/bookRoutes.js";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookmodels.js";

const app = express();

//Middleware pour l'utilisation de cors
//Il ya deux manières d'utiliser cors
app.use(cors()); //1(Je vais pas écrire def là ici heun)

//2 & Recommandé
// app.use(cors(
//   {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"]
//   }
// ));

//middleware pour parser le corps de notre requête
app.use(express.json());

app.use("/books", booksRoutes);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('====================================');
    console.log("App connect to MongoDB");
    app.listen(PORT, () => { console.log(`App is listening to port  ${PORT}`) });
    console.log('====================================');
  })
  .catch((err) => {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  });