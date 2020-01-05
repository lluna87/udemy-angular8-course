import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  public name:string = "THIS Is An EXAMPLE Name"; 
  public numberArray:number[] = [1,2,3,4,5,6,7,8,9,10];
  public pi:number = Math.PI;
  public percentNumber:number = 0.324;

}
