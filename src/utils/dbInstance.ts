import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import fs from "fs";

class SequelizeInstance {
  public sqInstance: Sequelize;

  constructor() {
    dotenv.config();

    const dbName = String(process.env.DB);
    const dbUser = String(process.env.DBUSER);
    const dbPasswd = String(process.env.PASSWORD);
    const dbHost = String(process.env.HOST);
    const dbPort = Number(process.env.DBPORT);

    this.sqInstance = new Sequelize(dbName, dbUser, dbPasswd, {
      host: dbHost,
      port: dbPort,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          ca: fs.readFileSync(__dirname + "/ca-certificate.crt")
        }
      },
      define: {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
  }
}
const sequelizeInstance = new SequelizeInstance().sqInstance;
export default sequelizeInstance;
