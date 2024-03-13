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
  seeds: ['src/infrastructure/db/seeds/**/*{.js,.ts}'],
  factories: ['src/infrastructure/db/factories/**/*{.js,.ts}'],
};
export default new DataSource(options);
