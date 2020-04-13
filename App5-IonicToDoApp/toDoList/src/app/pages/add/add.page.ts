import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  public currentList;
  public itemName: string;

  constructor(private toDoService: ToDoService,
    private route: ActivatedRoute) {
    const listID = route.snapshot.paramMap.get('listId');
    this.currentList = toDoService.getList(listID);
  }

  ngOnInit() {
  }

  public addItem() {
    if (this.itemName.length === 0) {
      return;
    }

    /* Current list is referenced by reference */
    this.currentList.items.push(new ToDoItem(this.itemName));

    this.toDoService.saveToStorage();

    this.itemName = '';
  }

  public onCheckboxChange(item: ToDoItem) {
    this.currentList.completed = this.currentList.items.filter(o => !o.completed).length === 0;
    if (this.currentList.completed) {
      this.currentList.finishingDate = new Date();
    } else {
      this.currentList.finishingDate = null;
    }
    this.toDoService.saveToStorage();
  }

  public removeItem(itemIndex: number) {
    this.currentList.items.splice(itemIndex, 1);
    this.toDoService.saveToStorage();
  }

}
