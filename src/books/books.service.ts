import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid_v4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBooks() {
    return this.books;
  }

  findBookById(id: string) {
    return this.books[this.findBookIndexById(id)];
  }

  findBookIndexById(id: string) {
    const bookIndex = this.books.findIndex((book) => book.id == id);

    if (bookIndex === -1) {
      throw new NotFoundException('Book is not found!');
    }

    return bookIndex;
  }

  createBook(payload: any) {
    const { title, author, category } = payload;

    this.books.push({
      id: uuid_v4(),
      title,
      author,
      category,
    });

    return 'success';
  }

  editBookById(id: string, payload: any) {
    const { title, author, category } = payload;
    const bookIndex = this.findBookIndexById(id);

    this.books[bookIndex] = {
      ...this.books[bookIndex],
      title,
      author,
      category,
    };

    return 'success';
  }

  deleteBookById(id: string) {
    const bookIndex = this.findBookIndexById(id);

    this.books.splice(bookIndex, 1);

    return 'success';
  }
}
