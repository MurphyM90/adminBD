// TODO: 7) Video - Aquí podremos recuperar todas las tareas - los todo que tengamos

import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  todos: TaskI[];
  constructor(private todoService: TodoService) {}

  ngOnInit(){
    this.todoService.getTodos().subscribe(res => this.todos = res);
  }
}
