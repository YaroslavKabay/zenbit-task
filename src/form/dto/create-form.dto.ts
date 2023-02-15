import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator";

export class CreateFormDto{
    @IsString()
    @IsNotEmpty()
    @Length(2)
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Length(5)
    @IsString()
    @IsNotEmpty()
    message: string;
}