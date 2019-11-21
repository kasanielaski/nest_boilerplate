import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot(
            'mongodb+srv://kasanielaski:Psj3EnRt2@cluster0-rrmzk.mongodb.net/users?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }
        ),
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
