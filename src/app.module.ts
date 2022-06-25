import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BooksModule, UsersModule, MongooseModule.forRoot('mongodb://admin:password@ilhamsh.id:27017', {
    dbName: 'nest-book'
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
