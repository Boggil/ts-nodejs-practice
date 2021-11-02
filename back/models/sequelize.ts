/**
 * sequelize.ts를 따로 만든 이유는 순환참조가 일어나기 때문에 런타임에서 sequelize이 빈 객체 {}가 되기 때문
 */


import { Sequelize } from 'sequelize';
import config from '../config/config';

const env = process.env.NODE_ENV as ('production' | 'test' | 'development') || 'development';
const { database, username, password } = config[env];
const sequelize = new Sequelize(database, username, password, config[env]);

export { sequelize };
export default sequelize;