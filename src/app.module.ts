import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';

@Module({
    imports: [
        UserModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql'
        }),
        MongooseModule.forRoot('mongodb://localhost/nest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
