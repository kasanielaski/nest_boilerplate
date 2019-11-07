import { Module } from '@nestjs/common';
import { MockResolver } from './mock.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MockSchema } from './mock.schema';
import { MockService } from './mock.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Mock', schema: MockSchema }])
    ],
    providers: [MockResolver, MockService]
})
export class MockModule {}
