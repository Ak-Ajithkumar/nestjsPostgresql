import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public message: string;

}

export default Todo;