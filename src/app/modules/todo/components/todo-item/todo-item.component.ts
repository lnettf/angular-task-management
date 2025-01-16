import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() task!: Task;
  @Output() taskUpdate = new EventEmitter<Task>();
  @Output() taskDelete = new EventEmitter<number>();

  toggleCompleted() {
    const updatedTask = { ...this.task, completed: !this.task.completed };
    this.taskUpdate.emit(updatedTask);
  }

  deleteTask() {
    this.taskDelete.emit(this.task.id);
  }
}
