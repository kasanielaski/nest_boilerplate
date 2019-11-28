import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(createMockDto: CreateUserDto): Promise<User> {
        const createMock = new this.userModel(createMockDto);
        return await createMock.save();
    }

    async findUsers(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findUser(name: string): Promise<User> {
        return await this.userModel.findOne({ name }).exec();
    }

    async updateUser(user: CreateUserDto): Promise<User> {
        const { name, email } = user;
        const currentUser = await this.userModel.findOne({ name }).exec();
        return await currentUser.updateOne({ email }).exec();
    }

    async deleteUser(name: string): Promise<User> {
        return await this.userModel.findOneAndDelete({ name }).exec();
    }
}
