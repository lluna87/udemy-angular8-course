import { AddPage } from './../add/add.page';
import { Component } from '@angular/core';
import { ToDoService } from '../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-tab',
  templateUrl: 'todo-tab.page.html',
  styleUrls: ['todo-tab.page.scss']
})
export class ToDoTabPage {

  constructor(
    public toDoService: ToDoService,
    private router: Router
    ) {

  }

  public addList() {
    this.router.navigateByUrl('/tabs/add');
  }

}
