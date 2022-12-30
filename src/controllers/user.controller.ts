import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { User } from 'src/domain/user';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private _user: UserService) {}

  @Post('login')
  async login(@Body() user: User) {
    const response = await this._user.login(user);
    if (!response)
      throw new HttpException(
        'Se ha presentado un error',
        HttpStatus.BAD_REQUEST,
      );
    return response;
  }

  @Post('register')
  async register(@Body() user: User) {
    const response = this._user.register(user);
    if (!response)
      throw new HttpException(
        'Se ha presentando un error',
        HttpStatus.BAD_REQUEST,
      );
    return response;
  }
}
