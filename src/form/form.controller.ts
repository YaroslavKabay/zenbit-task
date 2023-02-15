import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateFormDto} from "./dto/create-form.dto";

@Controller('form')
export class FormController {
    @Post()
    createPost(@Body() createFormDto: CreateFormDto ){
        return createFormDto;
    }
    @Get()
    getAllPosts() {
        return 'all posts'
    }
    @Get(':id')
    getOnePostByID(@Param('id') id: string) {
        return `get post by ${id}`
    }
}
