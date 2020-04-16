import { Injectable } from '@angular/core';
import { ToDoList } from '../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  public lists: ToDoList[] = [];

  constructor() {
    this.loadFromStorage();
  }

  public createList(name: string) {
    const newList = new ToDoList(name);
    this.lists.push(newList);
    this.saveToStorage();

    return newList.id;
  }

  public getList(id: string | number) {
    const localID = Number(id);
    return this.lists.find(listData => listData.id === localID);
  }

  public saveToStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  public loadFromStorage() {
    const storage = localStorage.getItem('data');
    if (storage == null) {
      this.lists = [];
    } else {
      this.lists = JSON.parse(storage);
    }
  }

  private getListsByState(isCompleted: boolean){
    if (this.lists === null || this.lists.length === 0) {
      return [];
    }

    return this.lists.filter(o => o.completed === isCompleted);
  }

  public getPendingLists() {
    return this.getListsByState(false);
  }

  public getCompletedLists() {
    return this.getListsByState(true);
  }

  public removeList(listId: number) {
    this.lists = this.lists.filter(o => o.id !== listId);
    this.saveToStorage();
  }

}