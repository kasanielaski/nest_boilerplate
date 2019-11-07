import { Document } from 'mongoose';

export interface Mock extends Document {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
