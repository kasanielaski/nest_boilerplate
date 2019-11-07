import { Field, Int, InputType } from 'type-graphql';

@InputType()
export class MockInput {
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}
