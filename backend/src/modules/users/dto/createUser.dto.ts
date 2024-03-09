import { IsUUID, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  orgId: string;

  @IsString()
  userName: string;

  @IsNumber()
  @IsOptional()
  roleId?: number;
}
