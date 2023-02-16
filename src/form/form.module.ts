import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import {FormController} from "./form.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Form} from "./form.model";

@Module({
  imports: [SequelizeModule.forFeature([Form])],
  controllers: [FormController],
  providers: [FormService]
})
export class FormModule {}
