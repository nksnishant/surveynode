// config.js
require("dotenv").config();
const convict = require("convict");

const config = convict({
  env: {
    format: ["production", "dev", "test"],
    default: "dev",
    arg: "nodeEnv",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
    arg: "port",
  },
  mailconn: {
    host: process.env.MAIL_HOST || "smtp.mailtrap.io",
    port: process.env.MAIL_PORT || 2525,
    auth: {
      user: process.env.AUTH_USER || "9c8420a170a4df",
      pass: process.env.AUTH_PASSWORD || "94bd3df888e72e",
    },
  },
  db: {
    database: process.env.DATABASE_NAME || "ceo",
    username: process.env.DB_USER_NAME || "user",
    password: process.env.DB_PASSWORD || "password",
    dialect: process.env.DIALECT || "mysql",
    dbhost: process.env.DBHOST || "localhost",
  },
});

// const env = config.get("env");
// config.loadFile(`./config/${env}.json`);

config.validate({ allowed: "strict" });

module.exports = config.getProperties();
