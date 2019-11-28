import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class CreateUserDto {
    @Field()
    readonly name: string;
    @Field()
    readonly email: string;
    @Field()
    readonly password: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly role: string;
}
