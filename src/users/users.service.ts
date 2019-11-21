import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(name: string, age: number, role: string): Promise<User> {
        const user = new this.userModel({ name, age, role });
        return await user.save();
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async getUser(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();

        if (!user) {
            throw new NotFoundException('user not found');
        }
        return user;
    }

    async updateUser(
        id: string,
        name?: string,
        age?: number,
        role?: string
    ): Promise<User> {
        const user = await this.userModel.updateOne(id, { name, age, role }).exec();

        if (!user) {
            throw new NotFoundException('user not found');
        }
        return user;
    }

    async deleteUser(id: string): Promise<User> {
        const user = await this.userModel.findByIdAndDelete(id).exec();

        if (!user) {
            throw new NotFoundException('user nor found');
        }
        return user;
    }
}
