import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BooksModule, 
    UsersModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION, {
      dbName: process.env.MONGO_DBNAME
    }), 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
