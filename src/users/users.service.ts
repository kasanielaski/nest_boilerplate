import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import bcrypt from 'bcrypt';

import { User } from './user.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(
        username: string,
        age: number,
        role: string,
        password: string
    ): Promise<User> {
        const crypted = await bcrypt.hash(password, 10);
        const user = new this.userModel({
            username,
            age,
            role,
            password: crypted
        });
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

    async findUser(username: string): Promise<User> {
        const user = await this.userModel.findOne({ username });

        if (!user) {
            throw new NotFoundException('user not found');
        }

        return user;
    }

    async updateUser(params: {
        id: string;
        username?: string;
        age?: number;
        role?: string;
        password?: string;
    }): Promise<User> {
        const { id, ...field } = params;
        const user = await this.userModel.findById(id).exec();

        if (!user) {
            throw new NotFoundException('user not found');
        }

        for (const prop in field) {
            if (field[prop]) {
                prop === 'password'
                    ? await user.updateOne({
                          [prop]: await bcrypt.hash(field[prop], 10)
                      })
                    : await user.updateOne({ [prop]: field[prop] });
            }
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
