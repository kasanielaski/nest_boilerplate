import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class CreateMockDto {
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}
