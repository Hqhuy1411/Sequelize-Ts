import express, { Express, Request, Response } from "express";
import { routers } from "./routers/index.routers";
const app : Express = express()


routers(app)
app.listen(3000,()=>{
    console.log("Server is running on port ${PORT}")
})