import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import { User } from '../domain/user';
import { Cat } from '../domain/cat';

export const configurationDb: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'sinapsis_back',
  entities: [User, Cat],
  synchronize: true,
};
