import { Injectable, signal } from '@angular/core'

import { Task } from './task.model'

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
}
