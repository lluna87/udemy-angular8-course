import { ToDoList } from './../models/todo-list.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedFilter',
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {

  transform(lists: ToDoList[], completed: boolean = true): ToDoList[] {
    return lists.filter(o => o.completed === completed);
  }

}
