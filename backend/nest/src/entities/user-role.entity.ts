/* eslint-disable @typescript-eslint/no-unused-vars */

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class UserRole {
  @PrimaryGeneratedColumn('increment', { comment: 'ロールid' })
  @Field((type) => ID)
  id: number;

  @Column({ type: 'varchar', comment: 'ロール名', nullable: false })
  @Field()
  name: string;
}
