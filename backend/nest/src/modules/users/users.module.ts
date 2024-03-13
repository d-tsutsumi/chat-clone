import { Organization, User } from '@/entities';
import { OrganizationService } from '@/service/organization.service';
import { UserService } from '@/service/users.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './usersController';

@Module({
  imports: [TypeOrmModule.forFeature([User, Organization])],
  providers: [UserService, OrganizationService],
  controllers: [UsersController],
})
export class UsersModule {}
