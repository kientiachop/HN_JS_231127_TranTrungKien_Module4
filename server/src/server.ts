import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tasksRouter from "./routes/task";
import bodyParser from "body-parser";
const app = express();
const port = 8000;
dotenv.config();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/",tasksRouter);
// app.get("", (req, res) =>{
//     res.send("Hello World");
// })
app.listen(port, ()=>{
    console.log(`Đang gọi đến server http://localhost:${port}`);
    
})