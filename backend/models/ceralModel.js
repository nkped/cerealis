import { Schema, model } from "mongoose";

const cerealSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)


export const Cereal = model('Cereal', cerealSchema)