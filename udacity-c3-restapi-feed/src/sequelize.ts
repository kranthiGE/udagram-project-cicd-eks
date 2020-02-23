import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

console.log( `uname: ${c.username}` );
console.log( `password: ${c.password}` );
console.log( `database: ${c.database}` );
console.log( `host: ${c.host}` );


// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": "krandb123",
  "database": c.database,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
});

