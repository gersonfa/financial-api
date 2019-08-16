import * as mongoose from 'mongoose'

export const TransactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
}, {
        timestamps: true,
        versionKey: false
    })