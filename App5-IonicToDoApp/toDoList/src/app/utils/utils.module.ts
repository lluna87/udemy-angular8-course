import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToDoService } from '../services/todo.service';
import { ToDoList } from '../models/todo-list.model';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UtilsModule {

  public constructor(
    public toDoService: ToDoService,
    private router: Router,
    private alertController: AlertController
  ) {

  }

  public async openCreateListPopUp(list: ToDoList = null) {
    let popupHeader: string;
    let popupValue: string;
    let confirmButtonText: string;

    if (list === null) {
      popupHeader = 'New list';
      popupValue = '';
      confirmButtonText = 'Create';
    } else {
      popupHeader = 'Edit list';
      popupValue = list.title;
      confirmButtonText = 'Save';
    }

    const alert = await this.alertController.create({
      header: popupHeader,
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: popupValue,
          placeholder: 'Introduce a list name'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => console.log('Cancel')
      },
      {
        text: confirmButtonText,
        handler: (data) => {
          if (data.name.length === 0) {
            return;
          }

          if (list === null) {
            /* If no list received, then a new should be created */
            const listID = this.toDoService.createList(data.name);
            this.router.navigateByUrl(`/tabs/todo/add/${listID}`);
          } else {
            /* If a list has been received, update the list title */
            list.title = data.name;
            this.toDoService.saveToStorage();
          }
        }
      }
      ]
    });

    alert.present();
  }


}
