import { UtilsModule } from './../../utils/utils.module';
import { ToDoService } from './../../services/todo.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoList } from 'src/app/models/todo-list.model';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList, null)
  private ionList: IonList;

  @Input()
  public showCompleted: boolean;

  constructor(
    private router: Router,
    public toDoService: ToDoService,
    public utils: UtilsModule
    ) {
      this.showCompleted = false;
  }

  ngOnInit() {}

  public openList(list: ToDoList) {
    this.router.navigateByUrl(this.showCompleted ? `/tabs/done/add/${list.id}` : `/tabs/todo/add/${list.id}`);
  }

  public getSelectedList() {
    return this.showCompleted ? this.toDoService.getCompletedLists() : this.toDoService.getPendingLists();
  }

  public deleteList(list: ToDoList) {
    this.toDoService.removeList(list.id);
  }

  public openEditWindow(listItem: ToDoList) {
    this.utils.openCreateListPopUp(listItem);
    this.ionList.closeSlidingItems();
  }

}
