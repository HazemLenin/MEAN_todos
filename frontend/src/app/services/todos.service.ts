import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  readonly BASE_URL =   "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URL}/todos`);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.BASE_URL}/todos`, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.BASE_URL}/todos/${todo._id}`, todo);
  }

  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/todos/${todo._id}`);
  }
}
