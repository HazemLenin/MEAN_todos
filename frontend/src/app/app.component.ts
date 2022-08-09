import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  todos: Todo[] = [];
  
  todo_title: string = "";
  todo_completed: boolean = false;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    // Get todos
    this.loadTodos();
  }
  
  loadTodos(): void {
    // Get todos from service
    this.todosService.getTodos().subscribe(data => this.todos = data);
  }

  createTodo(): void {
    // Create todo and submit it
    let newTodo: Todo = {
      title: this.todo_title,
      completed: this.todo_completed
    };
    this.todosService.createTodo(newTodo).subscribe(data => this.loadTodos());
  }

  updateTodo(todo: Todo): void {
    // Get todo from view and submit it
    this.todosService.updateTodo(todo).subscribe(data => this.loadTodos());
  }

  deleteTodo(todo: Todo): void {
    // Get the whole todo and the service will use it's todo only
    this.todosService.deleteTodo(todo).subscribe(data => this.loadTodos());
  }
}
