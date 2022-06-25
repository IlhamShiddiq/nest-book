import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from 'src/schemas/book.schema';

@Injectable()
export class BooksService {
  constructor (@InjectModel(Book.name) private BookModel: Model<BookDocument>) {}

  async getAllBooks() {
    return await this.BookModel.find({}).exec()
  }

  async findBookById(id: string) {
    return await this.BookModel.findById(id).exec()
  }

  createBook(payload: any) {
    const newBook = new this.BookModel(payload)
    return newBook.save()
  }

  async editBookById(id: string, payload: any) {
    return await this.BookModel.findByIdAndUpdate(id, payload).exec()
  }

  async deleteBookById(id: string) {
    return await this.BookModel.findByIdAndRemove(id)
  }
}
