import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config()
console.log(process.env.MONGO_URL);
import connectDB from "./config/database.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express()
const port = process.env.PORT;

const corsOption = {
    origin: process.env.CLIENT_URL,
    Credential: true,
    timestamp: new Date().toDateString()
}
connectDB()

app.use(express.json())
app.use(cors(corsOption))
app.use(express.urlencoded({ extended: true }))

app.use(errorHandler)

app.get('/api/help', (req, res) => {
    res.json({
        status: 'OK',
        message: "Live meet server On",
        timestamp: new Date().toISOString()

    })
})

app.listen(port, () => { console.log(`Server is Up on ${port}`) })

