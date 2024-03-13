import { Organization, User } from '@/entities';
import { Failure, Success } from '@/utils/Result';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {}

  async findById(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['organization', 'join_tables'],
    });
    if (!user)
      return Failure.create<NotFoundException>(
        new NotFoundException('user not found'),
      );

    return Success.create(user);
  }

  async createUser(user: {
    name: string;
    org_id: string;
    user_role_id: number;
  }) {
    const { name, org_id, user_role_id } = user;
    const organization = await this.organizationRepository.findOne({
      where: { id: org_id },
    });
    if (!organization)
      return Failure.create<BadRequestException>(
        new BadRequestException('bad request'),
      );

    const newUserEntity = this.userRepository.create({
      user_name: name,
      organization,
      user_role: { id: user_role_id },
    });

    const newUser = await this.userRepository.save(newUserEntity);
    return Success.create(newUser);
  }
}
