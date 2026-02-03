import dotenv from 'dotenv'
import mongoose from "mongoose";
import app from "./app";
dotenv.config()



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL as string);

  app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
}