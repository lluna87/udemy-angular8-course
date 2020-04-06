import { ToDoItem } from './todo-item.model';

export class ToDoList {

    public id: number;
    public title: string;
    public creationDate: Date;
    public finishingDate: Date;
    public completed: boolean;
    public items: ToDoItem[];

    constructor(title: string) {
        this.items = [];
        this.title = title;
        this.creationDate = new Date();
        this.completed = false;
        /* Unique ID */
        this.id = new Date().getTime();
    }

}