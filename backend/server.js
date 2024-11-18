import express from "express";
import api from './routes/index.js'
import taskNote from './routes/taskNote.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()

const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

mongoose.connect(process.env.MONGODB_PATH, connectionOptions, () => {
    console.log('connect');
}, (e) => console.log(e))


const PORT = process.env.SERVER_PORT || 9000
const origin = process.env.CORS_ORIGIN || 'http://localhost:3000'

const app = express()

app.use(cors({
    origin
}));
app.use(express.json())
app.use(express.urlencoded())

app.use(api)
app.use(taskNote)

app.listen(PORT, () => {
    console.log(`Your app is running in http://localhost:${PORT}`)
})


//Resolve connection issues
//DELETE AFTER DONE:
// set NODE_TLS_REJECT_UNAUTHORIZED=0 
