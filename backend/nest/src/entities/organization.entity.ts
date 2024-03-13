/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'Organization' })
@Entity()
export class Organization {
  @PrimaryGeneratedColumn('uuid', { comment: '組織id' })
  @Field((type) => ID)
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Field()
  name: string;
}
