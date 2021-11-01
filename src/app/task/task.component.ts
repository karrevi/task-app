import { Component, OnInit } from '@angular/core';
import { TaskAll } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  listTask: TaskAll[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTaskAll();
  }

  getTaskAll() {
    this.taskService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.listTask = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
