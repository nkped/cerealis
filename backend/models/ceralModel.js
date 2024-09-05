import mongoose from "mongoose";

const Schema = mongoose.Schema
const model = mongoose.model

const cerealSchema = Schema(
    {
        title: {
            type: String,
            required: true
        }
    }
)


export const Cereal = model('Cereal', cerealSchema)