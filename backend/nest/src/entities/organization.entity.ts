/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn('uuid', { comment: '組織id' })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;
}

@ObjectType({ description: 'Organization' })
export class SchemaOrganization {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
}
