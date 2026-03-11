import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// users/users.service.ts
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async create(email: string, hashedPassword: string) {
    const user = this.repo.create({ email, password: hashedPassword });
    return this.repo.save(user);
  }
}
