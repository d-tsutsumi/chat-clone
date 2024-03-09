import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: '0.0.0.0',
  username: 'postgres',
  password: 'postgrespassword',
  port: 5432,
  database: 'chat',
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  seedTracking: false,
  seeds: ['src/infrastructure/db/seeds/**/*{.js,.ts}'],
  factories: ['src/infrastructure/db/factories/**/*{.js,.ts}'],
  schema: 'tsutsumi_chat',
};
export default new DataSource(options);
