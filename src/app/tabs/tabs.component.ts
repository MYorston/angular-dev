import { Component, OnInit } from '@angular/core';
import { Character } from '../app.modal'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters: Character[] = [
    {
      name: 'Ben Solo',
      alignment: 'light'
    },
    {
      name: 'Kylo Ren',
      alignment: 'dark'
    },
  ];
  tab: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  setTab(side: string){
    this.tab = side;
  }

  getCharacters(){
    if(this.tab == 'all'){
      return this.characters
    }

    return this.characters.filter( (char) => char.alignment == this.tab);
  }

  onSideAssigned(charInfo: Character){
    const pos = this.characters.findIndex( (char) => char.name == charInfo.name);

    this.characters[pos].alignment = charInfo.alignment;
  }

}
