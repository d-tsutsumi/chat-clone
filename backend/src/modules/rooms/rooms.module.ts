import { Module } from '@nestjs/common';
import { RoomsResolver } from './rooms.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization, Rooms, User } from '@/entities';
import { roomController } from './roomsController';
import { RoomsService } from '@/service/rooms.service';
import { UserService } from '@/service/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Rooms, Organization])],
  providers: [RoomsResolver, RoomsService, UserService],
  controllers: [roomController],
})
export class RoomsModule {}
