import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'pipes';

  public name:string = "THIS Is An EXAMPLE Name"; 
  public fullName:string = "luis mIgUel lUNa"; 
  public numberArray:number[] = [1,2,3,4,5,6,7,8,9,10];
  public pi:number = Math.PI;
  public percentNumber:number = 0.324;
  public salary:number = 1234.5;
  public musician:any =         {
    name:  "Alex Turner",
    bio: "He is a singer, writer, musician and record producer. He is best known for being the frontman of Arctic Monkeys",
    //img: "assets/img/06.a.turner.jpg",
    birthDate: new Date(1986, 0, 6),
    deathDate: null,
    location: "Sheffield, Inglaterra"
  };
  public promiseValue:any = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data is here!"), 3500);
  });
  public dateToDisplay:Date = new Date();
  public videoID:string = "SV-y91BZonY";
  public aFakePassword = "ThisIsAFakePassword20";
}
