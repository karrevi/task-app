import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url = 'http://localhost:3000/api/tareas/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }
}
