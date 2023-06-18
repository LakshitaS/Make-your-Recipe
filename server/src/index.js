import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
// require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://user123:<password>123@recipes.r4on5ii.mongodb.net/recipes?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
    // useNewUrlParser: true;
    // useUnifiedTopology: true
})
.catch(()=>{
    console.log('failed');
    // console.log(error);
})
app.listen(3001, () => console.log("Server started"));