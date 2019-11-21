import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(name: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(name);

        if (!user) {
            throw new NotFoundException('user not found');
        }
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }
}
