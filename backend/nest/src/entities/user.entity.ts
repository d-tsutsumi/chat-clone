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
import { SchemaUserRole, UserRole } from './user-role.entity';
import { Organization, SchemaOrganization } from './organization.entity';
import { Rooms, SchemaRooms } from './rooms.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { comment: 'ユーザーId' })
  id: string;

  @Column({ type: 'varchar', nullable: false, comment: 'ユーザー名' })
  user_name: string;

  @CreateDateColumn({ type: 'date', comment: '参加日時' })
  join_at: Timestamp;

  @Column({ type: 'boolean', default: false, comment: 'プッシュ通知' })
  push_flag: boolean;

  @ManyToOne(() => UserRole, (userRole) => userRole)
  @JoinColumn({ name: 'role_id' })
  user_role: UserRole;

  @ManyToOne(() => Organization, (organization) => organization)
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @ManyToMany(() => Rooms)
  @JoinTable()
  join_tables: Rooms[];
}

@ObjectType()
export class SchemaUser {
  @Field((type) => ID)
  id: string;

  @Field()
  user_name: string;

  @Field((type) => Date)
  join_at: Timestamp;

  @Field()
  push_flag: boolean;
  @Field((type) => SchemaUserRole)
  user_role: UserRole;

  @Field(() => SchemaOrganization)
  organization: Organization;
  @Field((type) => [SchemaRooms])
  join_tables: Rooms[];
}
