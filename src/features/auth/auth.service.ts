import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';
import { User } from './models/user.type';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async registerUser(user: User): Promise<User> {
    const { email, password, ...rest } = user;
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 8)) as Buffer;
    const result = `${salt}.${hash.toString('hex')}`;

    const newUser = { ...rest, email, password: result };
    const savedUser = await this.userRepository.save(newUser);
    delete savedUser.password;

    return savedUser;

    // TODO: https://stackoverflow.com/questions/50360101/how-to-exclude-entity-field-from-returned-by-controller-json-nestjs-typeorm
    // TODO: Validations
  }
}
