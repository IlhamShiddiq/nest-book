import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Match } from "src/decorators/match.decorator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsNotEmpty()
    full_name: string

    @ApiProperty()
    @IsNotEmpty()
    password: string

    @ApiProperty()
    @IsNotEmpty()
    @Match('password', {message: 'Password doesnt match!'})
    password_confirmation: string
}
