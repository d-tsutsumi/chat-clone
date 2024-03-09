/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Column,
  Entity,
  CreateDateColumn,
  Timestamp,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRole } from './user-role.entity';
import { Organization } from './organization.entity';
import { Rooms } from './rooms.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { comment: 'ユーザーId' })
  @Field((type) => ID)
  id: string;

  @Column({ type: 'varchar', nullable: false, comment: 'ユーザー名' })
  @Field()
  user_name: string;

  @CreateDateColumn({ type: 'date', comment: '参加日時' })
  @Field((type) => Date)
  join_at: Timestamp;

  @Column({ type: 'boolean', default: false, comment: 'プッシュ通知' })
  @Field()
  push_flag: boolean;

  @ManyToOne(() => UserRole, (userRole) => userRole)
  @JoinColumn({ name: 'role_id' })
  @Field((type) => UserRole)
  user_role: UserRole;

  @ManyToOne(() => Organization, (organization) => organization)
  @JoinColumn({ name: 'organization_id' })
  @Field(() => Organization)
  organization: Organization;

  @ManyToMany(() => Rooms)
  @JoinTable()
  @Field((type) => [Rooms])
  join_tables: Rooms[];
}
