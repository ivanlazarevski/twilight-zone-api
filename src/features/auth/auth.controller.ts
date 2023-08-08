import { Body, Controller, Post } from '@nestjs/common';
import { User } from './models/user.type';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: User) {
    return this.authService.registerUser(user);
  }
}
