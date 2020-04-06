import { Injectable } from '@angular/core';
import { ToDoList } from '../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  public lists: ToDoList[] = [];

  constructor() {
    const groseriesList = new ToDoList("Groseries");
    const firstList = new ToDoList("Courses");

    this.lists.push(groseriesList);
    this.lists.push(firstList);
  }
}
