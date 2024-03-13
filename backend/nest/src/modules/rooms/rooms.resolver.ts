/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rooms } from '@/entities/rooms.entity';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateRoomDto } from './dto/createRoomDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/entities';
import { Repository } from 'typeorm';
import { RoomsService } from '@/service/rooms.service';
import { UserService } from '@/service/users.service';
import { isResultError } from '@/utils/Result';

@Resolver((of) => Rooms)
export class RoomsResolver {
  constructor(
    private roomsService: RoomsService,
    private userService: UserService,
  ) {}

  @Query(() => Rooms, { name: 'room', nullable: true })
  async getRoom() {
    const data = await this.roomsService.findByID(
      '1888262b-9740-4297-9497-2f84c7ed09cb',
    );

    if (isResultError(data)) throw data.value;

    return data.value;
  }

  @Mutation((returns) => Rooms)
  async addRoom(@Args('CreateRoomDto') createRoomDto: CreateRoomDto) {
    const { roomName, userId } = createRoomDto;
    const resultUser = await this.userService.findById(userId);

    if (isResultError(resultUser)) throw resultUser.value;

    const user = resultUser.value;
    const resultRooms = await this.roomsService.createTable(user, {
      org_id: user.organization.id,
      name: roomName,
    });

    if (isResultError(resultRooms)) throw resultRooms.value;
    console.log(resultRooms);
    return resultRooms.value;
  }
}
