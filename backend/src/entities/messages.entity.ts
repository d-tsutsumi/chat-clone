/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from './user.entity';
import { Rooms } from './rooms.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'messages' })
@Entity()
export class Messages {
  @PrimaryGeneratedColumn('increment', { comment: 'メッセージID' })
  @Field((type) => ID)
  id: number;

  @Column({ type: 'varchar', comment: 'メッセージ', nullable: true })
  @Field()
  message: string;

  @CreateDateColumn({ type: 'date', comment: '作成日時' })
  @Field((type) => Date)
  create_at: Timestamp;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'user_id' })
  @Field((type) => User)
  user: User;

  @ManyToOne(() => Rooms, (room) => room)
  @JoinColumn({ name: 'room_id' })
  @Field((type) => Rooms)
  room: Rooms;
}
