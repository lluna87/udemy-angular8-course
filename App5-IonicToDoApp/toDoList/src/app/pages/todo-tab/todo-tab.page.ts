import { UtilsModule } from './../../utils/utils.module';
import { Component } from '@angular/core';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-tab',
  templateUrl: 'todo-tab.page.html',
  styleUrls: ['todo-tab.page.scss']
})
export class ToDoTabPage {

  constructor(
    public toDoService: ToDoService,
    public utils: UtilsModule
  ) {

  }

}
