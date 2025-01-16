import { Routes } from '@angular/router';
import { TodoListComponent } from './modules/todo/components/todo-list/todo-list.component';
import { TodoItemComponent } from './modules/todo/components/todo-item/todo-item.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'task/:id', component: TodoItemComponent },
  { path: '**', redirectTo: '' },
];
