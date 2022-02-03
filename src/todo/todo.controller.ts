import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateTodoDto from 'src/Dto/create.dto';
import UpdateTodoDto from 'src/Dto/update.dto';
import { TodosService } from './todo.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return this.todosService.getTodoById(Number(id));
  }

  @Post()
  async createTodo(@Body() todo: CreateTodoDto) {
    return this.todosService.createTodo(todo);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() todo: UpdateTodoDto) {
    return this.todosService.updateTodo(Number(id), todo);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    this.todosService.deleteTodo(Number(id));
  }
}
