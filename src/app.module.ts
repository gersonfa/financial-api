import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'

dotenv.config()
console.log(process.env.DB_HOST)
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_HOST),
    TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
