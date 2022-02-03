import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';

import { TodosModule } from './todo/todo.module';

@Module({
  imports: [ConfigModule.forRoot({}), DatabaseModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
