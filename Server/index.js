import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config()

const app = express()
const port = process.env.PORT;

const corsOption = {
    origin: process.env.CLIENT_URL,
    Credential: true,


}

app.use(express.json())
app.use(cors(corsOption))
app.use(express.urlencoded({ extended: true }))

app.get('/api/help', (req, res) => {
    res.json({
        status: 'OK',
        message: "Live meet server On",
        timestamp: new Date().toISOString()

    })
})

app.listen(port, () => { console.log(`Server is Up on ${port}`) })

