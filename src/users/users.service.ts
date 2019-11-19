import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(name: string, age: number, role: string): Promise<User> {
        const user = new this.userModel({ name, age, role });
        return await user.save();
    }

    async getAllUsers() {
        return await this.userModel.find().exec();
    }
}
