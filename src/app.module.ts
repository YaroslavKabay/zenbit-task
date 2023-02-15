import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './form/form.controller';
import { FormModule } from './form/form.module';

@Module({
  imports: [FormModule],
  controllers: [AppController, FormController],
  providers: [AppService],
})
export class AppModule {}
