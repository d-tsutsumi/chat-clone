import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserRole, Messages, Organization, Rooms } from '@/entities';

export const typeOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'postgres',
  username: 'postgres',
  password: 'postgrespassword',
  port: 5432,
  synchronize: true,
  entities: [User, UserRole, Messages, Organization, Rooms],
});
