// import { number, string } from "joi";
import mongoose from "mongoose";

const project = new mongoose.Schema({

    //project title listed here
    title: {
        type: String,
        unique: true // `email` must be unique
    },
    //project description listed here
    description: String,

    //details of individual task assigned to each project assigned here
    task: [
        {
            id: Number,
            title: String,
            description: String,
            order: Number,
            stage: String,
            isOneList: Boolean,
            capacity: { type: Number, default: 10 },
            index: Number,
            attachment: [
                { type: String, url: String }
            ],
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
        }
    ]
}, { timestamps: true })


export default mongoose.model('Project', project);