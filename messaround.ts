import dotenv from "dotenv";

dotenv.config();
console.log({ DB_env: process.env.DATABASE_URL });
console.log({ EnviromentVAR: process.env.CHEESE });
console.log({ JWT_VAR: process.env.JWT_SECRET });
