import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookValidator } from './dto/book-validator.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get('/:id')
  findBookById(@Param('id') id: string) {
    return this.bookService.findBookById(id);
  }

  @Post()
  storeBook(@Body() payload: BookValidator) {
    return this.bookService.createBook(payload);
  }

  @Put('/:id')
  editBookById(@Param('id') id: string, @Body() payload: BookValidator) {
    return this.bookService.editBookById(id, payload);
  }

  @Delete('/:id')
  DeleteBookById(@Param('id') id: string) {
    return this.bookService.deleteBookById(id);
  }
}
