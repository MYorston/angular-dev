import { Component, OnInit } from '@angular/core';
import { Character, Alignment } from '../app.modal';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters: Character[] = [];
  tab: Alignment = 'all';

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
  }

  setTab(side: Alignment){
    this.tab = side;
    this.getCharacters();
  }

  getCharacters(){
    this.characters = this.starWarsService.getCharacters(this.tab);
    return this.characters;
  }

  onSideAssigned(charInfo: Character){
    const pos = this.characters.findIndex( (char) => char.name == charInfo.name);

    this.characters[pos].alignment = charInfo.alignment;
  }

}
