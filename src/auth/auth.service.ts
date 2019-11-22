import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(username);
        const match = await bcrypt.compare(password, user.password);

        if (user && match) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }
}
