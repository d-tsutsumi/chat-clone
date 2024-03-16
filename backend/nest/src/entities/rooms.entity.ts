/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Organization, SchemaOrganization } from './organization.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
export class Rooms {
  @PrimaryGeneratedColumn('uuid', { comment: 'ルームid' })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: 'ルーム名' })
  @Field()
  name: string;

  @CreateDateColumn({ type: 'date', comment: '作成日時' })
  create_at: Timestamp;

  @ManyToOne(() => Organization, (organization) => organization)
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;
}

@ObjectType()
export class SchemaRooms {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => String)
  create_at: Timestamp;

  @Field((type) => SchemaOrganization)
  organization: Organization;
}
