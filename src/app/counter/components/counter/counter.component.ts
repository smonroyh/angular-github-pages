import { Component } from "@angular/core";

@Component({
  // templateUrl:"./counter.component.html",
  selector: 'app-counter',
  template: `

    <h3>counter:{{counter}}</h3>

    <button (click)="increasyBy(1)">+1</button>

    <button (click)="increasyBy(-1)">-1</button>

    <button (click)="reset()">Reset</button>

  `

})
export class CounterComponent{
  public counter : number =10;

  increasyBy(value : number){
      this.counter+=value;
  }

  reset(){
    this.counter=10;
  }
}
