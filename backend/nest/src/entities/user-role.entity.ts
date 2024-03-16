/* eslint-disable @typescript-eslint/no-unused-vars */

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn('increment', { comment: 'ロールid' })
  id: number;

  @Column({ type: 'varchar', comment: 'ロール名', nullable: false })
  name: string;
}

@ObjectType()
export class SchemaUserRole {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;
}
