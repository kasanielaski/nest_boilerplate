import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserInput } from './inputs/user.input';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [CreateUserDto])
    async findUsers(): Promise<User[]> {
        return this.userService.findUsers();
    }

    @Query(() => CreateUserDto)
    async findUser(@Args('name') name: string): Promise<User> {
        return this.userService.findUser(name);
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args('user') user: UserInput): Promise<User> {
        return this.userService.createUser(user);
    }

    @Mutation(() => CreateUserDto)
    async updateUser(@Args('user') user: UserInput): Promise<User> {
        return this.userService.updateUser(user);
    }

    @Mutation(() => CreateUserDto)
    async deleteUser(@Args('name') name: string): Promise<User> {
        return this.userService.deleteUser(name);
    }
}
