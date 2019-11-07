import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { MockService } from './mock.service';
import { CreateMockDto } from './dto/create-mock.dto';
import { Mock } from './interfaces/mock.interface';
import { MockInput } from './inputs/mock.input';

@Resolver()
export class MockResolver {
    constructor(private readonly mockService: MockService) {}

    @Query(() => String)
    async hello(
        @Args({ name: 'text', type: () => String }) text: string
    ): Promise<string> {
        return `mock hello ${text}`;
    }

    @Query(() => [CreateMockDto])
    async findAll(): Promise<Mock[]> {
        return this.mockService.findAll();
    }

    @Mutation(() => CreateMockDto)
    async createMock(@Args('mock') mock: MockInput): Promise<Mock> {
        return this.mockService.create(mock);
    }
}
