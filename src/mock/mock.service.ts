import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Mock } from './interfaces/mock.interface';
import { CreateMockDto } from './dto/create-mock.dto';

@Injectable()
export class MockService {
    constructor(@InjectModel('Mock') private readonly mockModel: Model<Mock>) {}

    async create(createMockDto: CreateMockDto): Promise<Mock> {
        const createMock = new this.mockModel(createMockDto);
        return await createMock.save();
    }

    async findAll(): Promise<Mock[]> {
        return await this.mockModel.find().exec();
    }
}
