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

@Entity()
export class Messages {
  @PrimaryGeneratedColumn('increment', { comment: 'メッセージID' })
  id: number;

  @Column({ type: 'varchar', comment: 'メッセージ', nullable: true })
  message: string;

  @CreateDateColumn({ type: 'date', comment: '作成日時' })
  create_at: Timestamp;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Rooms, (room) => room)
  @JoinColumn({ name: 'room_id' })
  room: Rooms;
}

@ObjectType({ description: 'messages' })
export class SchemaMassage {
  @Field((type) => ID)
  id: number;

  @Field()
  message: string;
  @Field((type) => Date)
  create_at: Timestamp;
  @Field((type) => User)
  user: User;

  @Field((type) => Rooms)
  room: Rooms;
}
