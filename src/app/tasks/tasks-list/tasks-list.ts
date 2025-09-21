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
  private readonly selectedFilter = signal<string>('all')
  private readonly filterTasks = () => {
    return this.selectedFilter() === 'all'
      ? this.tasksService.allTasks()
      : this.tasksService
          .allTasks()
          .filter(
            (task) =>
              task.status === getCurrentTaskStatus(this.selectedFilter()),
          )
  }
  tasks = computed(this.filterTasks)

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter)
  }
}
