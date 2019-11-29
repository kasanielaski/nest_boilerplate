import { Controller, Request, UseGuards, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { User } from './users/user.interface';

@Controller()
export class AppController {
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req): Promise<User> {
        return req.user;
    }
}
