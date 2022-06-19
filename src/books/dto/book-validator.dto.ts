import { IsNotEmpty } from 'class-validator';

export class BookValidator {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  category: string;
}
