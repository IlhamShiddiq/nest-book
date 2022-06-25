import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from 'src/schemas/book.schema';
import { BookValidator } from './dto/book-validator.dto';

@Injectable()
export class BooksService {
  constructor (@InjectModel(Book.name) private BookModel: Model<BookDocument>) {}

  async getAllBooks() {
    return await this.BookModel.find({}).exec()
  }

  async findBookById(id: string) {
    return await this.BookModel.findById(id).exec()
  }

  createBook(payload: BookValidator) {
    const newBook = new this.BookModel(payload)
    return newBook.save()
  }

  async editBookById(id: string, payload: BookValidator) {
    return await this.BookModel.findByIdAndUpdate(id, payload).exec()
  }

  async deleteBookById(id: string) {
    return await this.BookModel.findByIdAndRemove(id)
  }
}
