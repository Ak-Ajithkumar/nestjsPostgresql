import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateTodoDto from 'src/Dto/create.dto';
import UpdateTodoDto from 'src/Dto/update.dto';
import Todo from 'src/entity/todo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

 
  getAllTodos() {
    return this.todoRepository.find();
  }

  
  async getTodoById(id: number) {
    const todo = await this.todoRepository.findOne(id);
    if (todo) {
      return todo;
    }

    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  async createTodo(todo: CreateTodoDto) {
    const newTodo = await this.todoRepository.create(todo);
    await this.todoRepository.save(newTodo);

    return newTodo;
  }

 
  async updateTodo(id: number, post: UpdateTodoDto) {
    await this.todoRepository.update(id, post);
    const updatedTodo = await this.todoRepository.findOne(id);
    if (updatedTodo) {
      return updatedTodo;
    }

    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }


  async deleteTodo(id: number) {
    const deletedTodo = await this.todoRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
  }
}