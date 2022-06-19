import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true, 
        // userFindAndModify:false,
        useUnifiedTopology: true, 
        // userCreateIndex:true,
    })
    .then(()=>console.log("DB connected kya baat hai into 2"))
    .catch((err)=>console.log("jindagi ka naam hi error hai laale ",err));

    app.use(express.json({limit : "5mb"}));
    app.use(express.urlencoded({extended : "true"}));
    app.use(cors({origin:["http://localhost:3000"], }));

    // app.post("/api/login",(req,res)=>{
    //     console.log("Register endpoint -> ",req.body);
    // });
    readdirSync('./routes').map((r)=>{
        app.use("/api",require(`./routes/${r}`));
    });

    const port = process.env.PORT || 8000;
     
    app.listen(port, ()=> console.log(`Server is running bichi ${port}` ));

