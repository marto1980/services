import { Component, computed, input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Task, TaskStatus } from '../../task.model'

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

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  task = input.required<Task>()
  // eslint-disable-next-line unicorn/consistent-function-scoping
  taskStatus = computed(() => getCurrentTaskStatusLabel(this.task().status))

  onChangeTaskStatus(taskId: string, status: string) {
    ;(() => {
      switch (status) {
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
    })()
  }
}
