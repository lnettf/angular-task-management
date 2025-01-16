import { Component } from '@angular/core';
import { Task } from '../../task.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Comprar pan', completed: false },
    { id: 2, title: 'Estudiar Angular', completed: false },
    { id: 3, title: 'Hacer ejercicio', completed: false },
  ];

  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
