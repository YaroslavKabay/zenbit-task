import { Injectable } from '@nestjs/common';
import {CreateFormDto} from "./dto/create-form.dto";
import {InjectModel} from "@nestjs/sequelize";

import {Form} from "./form.model";

@Injectable()
export class FormService {

    constructor(@InjectModel(Form) private formRepository: typeof Form) {
    }

    async createForm(form: CreateFormDto){
        return this.formRepository.create(form)
    }

    async getAll(){
        return this.formRepository.findAll()
    }

}
