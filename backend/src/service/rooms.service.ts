import { Rooms } from '@/entities/rooms.entity';
import { User } from '@/entities/user.entity';
import { Failure, Success } from '@/utils/Result';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Rooms) private roomsRepository: Repository<Rooms>,
  ) {}

  async findByID(id: string) {
    const user = await this.roomsRepository.findOneBy({ id });
    return user
      ? Success.create(user)
      : Failure.create(new NotFoundException('user not found'));
  }

  async findByUserId(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['join_tables'],
      select: ['join_tables'],
    });

    return user?.join_tables
      ? Success.create(user.join_tables)
      : Success.create([] as Rooms[]);
  }

  async createTable(user: User, room: { org_id: string; name: string }) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newRoomInstance = this.roomsRepository.create({
        organization: { id: room.org_id },
        name: room.name,
      });
      const newRooms = await queryRunner.manager.save(newRoomInstance);

      const updateUserInstance = this.userRepository.create({
        ...user,
        join_tables: [...user.join_tables, newRoomInstance],
      });
      await queryRunner.manager.save(updateUserInstance);

      await queryRunner.commitTransaction();
      return Success.create(newRooms);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      return Failure.create(new InternalServerErrorException());
    } finally {
      await queryRunner.release();
    }
  }
}
