import { Injectable, signal } from '@angular/core'

import { Task, TaskStatus } from './task.model'

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([])
  allTasks = this.tasks.asReadonly()

  addTask(title: string, description: string) {
    this.tasks.update((oldTasks: readonly Task[]) => {
      return [
        ...oldTasks,
        {
          id: crypto.randomUUID(),
          title: title,
          description: description,
          status: 'OPEN',
        },
      ]
    })
  }

  changeTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((tasksOld) =>
      tasksOld.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    )
  }
}
