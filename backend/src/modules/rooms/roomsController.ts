import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { RoomsService } from '@/service/rooms.service';
import { UserService } from '../../service/users.service';
import { isResultError } from '@/utils/Result';
import { CreateRoomDto } from './dto/createRoomDto';
import { isUUID } from 'class-validator';

@Controller('/room')
export class roomController {
  constructor(
    private roomsService: RoomsService,
    private userService: UserService,
  ) {}

  @Get('/:id')
  async getRoomsByUserId(@Param('id') userId: string) {
    if (!isUUID(userId)) throw new BadRequestException();
    const resultRoom = await this.roomsService.findByUserId(userId);

    resultRoom.value;
  }

  @Post()
  async createRoom(@Body() createRoomDto: CreateRoomDto) {
    const { userId, roomName } = createRoomDto;
    const resultUser = await this.userService.findById(userId);

    if (isResultError(resultUser)) throw resultUser.value;

    const user = resultUser.value;
    const resultRooms = await this.roomsService.createTable(user, {
      org_id: user.organization.id,
      name: roomName,
    });

    if (isResultError(resultRooms)) throw resultRooms.value;

    return resultRooms.value;
  }
}
