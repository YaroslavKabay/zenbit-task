import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateFormDto{
    @ApiProperty({
        example: 'Taras',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @Length(2)
    name: string;

    @ApiProperty({
        example: 'example@domain.com',
        required: true
    })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: 'Some message',
        required: true
    })
    @Length(5)
    @IsString()
    @IsNotEmpty()
    message: string;
}