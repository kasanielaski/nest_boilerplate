import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { User } from './user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('price') role: string
    ): Promise<User> {
        return await this.usersService.createUser(name, age, role);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.usersService.getAllUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.getUser(id);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('role') role: string
    ): Promise<User> {
        return await this.usersService.updateUser(id, name, age, role);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.deleteUser(id);
    }
}
