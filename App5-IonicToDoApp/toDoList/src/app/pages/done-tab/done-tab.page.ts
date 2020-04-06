import { Component } from '@angular/core';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'app-done-tab',
  templateUrl: 'done-tab.page.html',
  styleUrls: ['done-tab.page.scss']
})
export class DoneTabPage {

  constructor(
    public toDoService: ToDoService
    ) {

  }

}
