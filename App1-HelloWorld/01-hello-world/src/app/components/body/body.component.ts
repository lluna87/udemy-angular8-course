import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    
    show:boolean = true;

    phrase: any = {
        message: "Sé que soy nada más que menos de lo que podría ser",
        englishMessage: "I know that I'm nothing more than less than what I could be",
        author: "Gustavo Cerati"
    }

    musicians: string[] = ["Samalea", "Coleman", "Nalé"];
}