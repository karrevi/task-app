import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'create-task', component: CreateTasksComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
