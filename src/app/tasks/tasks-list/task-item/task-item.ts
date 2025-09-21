import { Component, computed, inject, input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Task, TaskStatus } from '../../task.model'
import { TasksService } from '../../tasks-service'

const getCurrentTaskStatusLabel = (taskStatus: TaskStatus) => {
  switch (taskStatus) {
    case 'OPEN': {
      return 'Open'
    }
    case 'IN_PROGRESS': {
      return 'Working on it'
    }
    case 'DONE': {
      return 'Completed'
    }
    default: {
      return 'Open'
    }
  }
}

const getCurrentTaskStatus = (statusValue: string): TaskStatus => {
  switch (statusValue) {
    case 'open': {
      return 'OPEN'
    }
    case 'in-progress': {
      return 'IN_PROGRESS'
    }
    case 'done': {
      return 'DONE'
    }
    default: {
      return 'OPEN'
    }
  }
}

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItemComponent {
  task = input.required<Task>()
  // eslint-disable-next-line unicorn/consistent-function-scoping
  taskStatus = computed(() => getCurrentTaskStatusLabel(this.task().status))
  private readonly tasksService = inject(TasksService)

  onChangeTaskStatus(taskId: string, status: string) {
    this.tasksService.changeTaskStatus(taskId, getCurrentTaskStatus(status))
  }
}
