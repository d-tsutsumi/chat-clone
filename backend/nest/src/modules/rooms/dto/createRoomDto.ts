import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length, IsString } from 'class-validator';

@InputType()
export class CreateRoomDto {
  @IsUUID()
  @Field()
  userId: string;

  @IsString()
  @Length(1, 200)
  @Field()
  roomName: string;
}
