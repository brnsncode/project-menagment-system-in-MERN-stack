// import { number, string } from "joi";
import mongoose from "mongoose";

const tasknote = new mongoose.Schema({
    //task if that it is assigned to is listed here
    taskId: {
        type: String,
        unique: true // `email` must be unique
    },
    // description: String,
    tasknote: [
        {
            id: Number,
            note: String,
            order: Number,
            index: Number,
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
        }
    ]
}, { timestamps: true })


export default mongoose.model('TaskNote', tasknote);