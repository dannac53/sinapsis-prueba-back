import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/domain/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async login(user: User): Promise<User> {
    const findUser = await this.userRepository.findOneBy({
      email: user.email,
      password: user.password,
    });
    if (!findUser) return null;
    return findUser;
  }
  async register(user: User): Promise<User> {
    const existsByEmail = await this.userRepository.findOneBy({
      email: user.email,
    });
    if (existsByEmail) return null;
    const userSave = await this.userRepository.save(user);
    return userSave;
  }
}
