import { IsNotEmpty } from "class-validator";
import { Match } from "src/decorators/match.decorator";

export class CreateUserDto {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    full_name: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    @Match('password', {message: 'Password doesnt match!'})
    password_confirmation: string
}
