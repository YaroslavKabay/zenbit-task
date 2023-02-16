import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiBadRequestResponse, ApiResponse, ApiTags} from "@nestjs/swagger";

import {CreateFormDto} from "./dto/create-form.dto";
import {FormService} from "./form.service";
import {Form} from "./form.model";

@ApiTags('forms')
@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) {
    }

    @ApiBadRequestResponse({status: 400, type: 'Wrong body'}) //??? please make it correct
    @ApiResponse({status: 201, type: Form,})
    @Post()
    createPost(@Body() createFormDto: CreateFormDto ){
        return this.formService.createForm(createFormDto);
    }

    @ApiBadRequestResponse({status: 400, type: 'Bad request'}) //??? please make it correct
    @ApiResponse({status: 200})
    @Get()
    getAllPosts() {
        return this.formService.getAll();
    }

}
