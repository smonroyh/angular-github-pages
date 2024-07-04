import { Component } from '@angular/core';

@Component({
  //app-heroes-list
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] =["Spiderman", "Ironman", "Hulk", "She Hulk", "Thor"];
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero=this.heroNames.pop();
  }
}
