import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot(
            'mongodb+srv://kasanielaski:Psj3EnRt2@cluster0-rrmzk.mongodb.net/users?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
