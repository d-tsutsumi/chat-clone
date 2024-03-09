import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserRole, Messages, Organization, Rooms } from '@/entities';

export const typeOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgrespassword',
  port: 5432,
  database: 'chat',
  synchronize: true,
  schema: 'tsutsumi_chat',
  entities: [User, UserRole, Messages, Organization, Rooms],
});
