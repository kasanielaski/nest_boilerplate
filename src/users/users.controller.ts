import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    UseInterceptors,
    CacheInterceptor
} from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './user.interface';

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(
        @Body('username') username: string,
        @Body('age') age: number,
        @Body('role') role: string,
        @Body('password') password: string
    ): Promise<User> {
        return await this.usersService.createUser(
            username,
            age,
            role,
            password
        );
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.usersService.getAllUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.getUser(id);
    }

    @Get(':username')
    async findUser(@Param('username') username: string): Promise<User> {
        return await this.usersService.findUser(username);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body('username') username: string,
        @Body('age') age: number,
        @Body('role') role: string,
        @Body('password') password: string
    ): Promise<User> {
        return await this.usersService.updateUser({
            id,
            username,
            age,
            role,
            password
        });
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.deleteUser(id);
    }
}
