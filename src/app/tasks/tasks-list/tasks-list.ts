import { Component, inject, signal } from '@angular/core'

import { TasksService } from '../tasks-service'
import { TaskItemComponent } from './task-item/task-item'

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.scss',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  tasksService = inject(TasksService)
  selectedFilter = signal<string>('all')
  tasks = this.tasksService.allTasks

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter)
  }
}
