import { TmplAstBoundDeferredTrigger } from '@angular/compiler';
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  template:`
  <h2 [@myAwesomeAnimation]= 'state' (click)="animateMe()">I will animate</h2>
  <h1>hi hi</h1>
  <p>{{ myObject.age }}</p>
  <ul>
    <li *ngFor = "let arr of myArr">
      {{ arr }}
</li>
</ul>
<ul>
    <li *ngIf = "myArr2  == 'something'"> I sure
      do exist
      {{ myArr2 }}
</li>
</ul>
<ul>
    <li *ngIf = "myArr3; else otherTemplate"> I sure
      do exist
     
</ul>
<div *ngIf = "myArr; then template2 else template1"></div>


      <ng-template #otherTemplate> No, I do definately exist </ng-template>
      <ng-template #template1> Truth </ng-template>
      <ng-template #template2> False </ng-template>



<img src = " {{ angularLogo }}">
<img [src] = " angularLogo">
<img bind-src = "angularLogo">
  
  <button [disabled] ="buttonStatus == 'enabled'">My Button</button>
  

  <button (click) = "myEvent2($event)">My Button</button>

  <button (mouseenter) = "myEvent2($event)">My Button</button>

<h1 [class]= "titleClass">hello</h1>
<h1 [class.bluetitle] = "bluetitleClass">hi</h1>
<h1 [ngClass] = "awesometitleClasses">hi again</h1>


<h1 [style.color]= "titleStyle ? 'green': 'pink'">hello</h1>

<h1 [ngStyle]= "titleStyles">hello</h1>


<p> {{ someProperty }} </p>

  `,
  styles:[
    `
    h2{
      width:200px;
      background:lightgray;
      margin:100px auto;
      text-align:center;
      padding: 20px;
      font-size:1.5em;
    }
    h1{
      text-decoration:underline;
    }
    
    .red-title{
      color:red;
    }
    .bluetitle{
      color:blue;
    }
    .largetitle{
      font-size:5em;
    }
    .fonttitle{
      font-family:Courier;
    }`
    ],

    animations: [
    trigger('myAwesomeAnimation', [
      
      
      state('small',style({
        transform:'scale(1)',
      })),
      
      state('large', style({
        transform: 'scale(1.2)',
      })),


      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform:'translateY(-75%)' , offset: 0}),
        style({opacity: 1, transform:'translateY(35px)' , offset: .5}),
        style({opacity: 1, transform:'translateY(0)' , offset: 1}),

      ]))),
    ]),


    ],

    
})
export class AppComponent {
myObject = {
gender: 'male',
age:20,
location:'US',
}
myArr = ['him','her','yours'];
myArr2 = 'something';
myArr3 = false;

angularLogo = 'http://angular.io/resources/images/logos/angular2.png';
buttonStatus = 'enabled';

myEvent(event: any) {
  console.log(event);
}
myEvent2(event: any) {
  console.log(event);
}

titleClass = 'red-title';
bluetitleClass = true;


awesometitleClasses = {
  'bluetitle':true,
 'largetitle':true,
 'fonttitle':true,
}


titleStyle = false;

titleStyles = {
  'color' : 'purple',
  'font-size' : '4em',
}

constructor(private dataService:DataService){
}

someProperty:string ='';

ngOninIt(){

  console.log(this.dataService.cars)
this.someProperty = this.dataService.myData();

}
state:string = 'small';
animateMe(){
this.state = (this.state =='small' ? 'large' : 'small' );

}
}



