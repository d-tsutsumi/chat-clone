import dataSource from './dataSource';

export const testMain = async () => {
  await dataSource.initialize();

  const a = dataSource.query('select * from user');

  console.log(a);
};
