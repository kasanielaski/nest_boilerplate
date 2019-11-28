import { Field, Int, InputType } from 'type-graphql';

@InputType()
export class UserInput {
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
