import { AddPage } from './../add/add.page';
import { Component } from '@angular/core';
import { ToDoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToDoList } from 'src/app/models/todo-list.model';

@Component({
  selector: 'app-todo-tab',
  templateUrl: 'todo-tab.page.html',
  styleUrls: ['todo-tab.page.scss']
})
export class ToDoTabPage {

  constructor(
    public toDoService: ToDoService,
    private router: Router,
    private alertController: AlertController
  ) {

  }

  private async addList() {
    // this.router.navigateByUrl('/tabs/add');
    const alert = await this.alertController.create({
      header: 'New list',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Introduce a list name'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => console.log('Cancel')
      },
      {
        text: 'Create',
        handler: (data) => {
          if (data.name.length === 0) {
            return;
          }

          const listID = this.toDoService.createList(data.name);

          this.router.navigateByUrl(`/tabs/add/${listID}`);
        }
      }
      ]
    });

    alert.present();
  }

  public openList(list: ToDoList) {
    this.router.navigateByUrl(`/tabs/add/${list.id}`);
  }
}
