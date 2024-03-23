import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'postgres',
  username: 'postgres',
  password: 'postgrespassword',
  port: 5432,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  seedTracking: false,
};
export default new DataSource(options);
