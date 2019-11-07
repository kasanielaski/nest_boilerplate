import * as mongoose from 'mongoose';

export const MockSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});
