import { Component, signal } from '@angular/core'

import { TaskItemComponent } from './task-item/task-item'

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.scss',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all')
  tasks = []

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter)
  }
}
