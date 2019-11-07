import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MockModule } from './mock/mock.module';

@Module({
    imports: [
        MockModule,
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
