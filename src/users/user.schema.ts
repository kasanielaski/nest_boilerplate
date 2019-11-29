import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    age: Number,
    role: String,
    password: String
});
