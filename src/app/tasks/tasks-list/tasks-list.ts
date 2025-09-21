import { Component, computed, inject, signal } from '@angular/core'

import { TasksService } from '../tasks-service'
import { getCurrentTaskStatus, TaskItemComponent } from './task-item/task-item'

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.scss',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private readonly tasksService = inject(TasksService)
  selectedFilter = signal<string>('all')
  // eslint-disable-next-line unicorn/consistent-function-scoping
  tasks = computed(() => {
    return this.selectedFilter() === 'all'
      ? this.tasksService.allTasks()
      : this.tasksService
          .allTasks()
          .filter(
            (task) =>
              task.status === getCurrentTaskStatus(this.selectedFilter()),
          )
  })

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter)
  }
}
