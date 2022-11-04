import { Injectable } from '@angular/core'; 
import { Character, Alignment } from './app.modal';
import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
	private characters: Character[] = [
    {
      name: 'Ben Solo',
      alignment: 'light'
    },
    {
      name: 'Kylo Ren',
      alignment: 'dark'
    },
  ];

  private log: LogService;

  constructor(private logService: LogService){
    this.log = logService;
  }

  getCharacters(side: Alignment){
    if(side == 'all'){
      return this.characters
    }

    return this.characters.filter( (char) => char.alignment == side);
  }

  updateAlignment(charInfo: Character){
    const pos = this.characters.findIndex( (char) => char.name == charInfo.name);

    this.characters[pos].alignment = charInfo.alignment;

    this.log.writeLog('Changed ' + charInfo.name + ' side to ' + charInfo.alignment);
  }

  addCharacter(charInfo: Character){
    const pos = this.characters.findIndex( (char) => charInfo.name == char.name);

    if( pos !== -1) {
      return;
    }

    this.characters.push(charInfo);
    console.log('this.characters: ', this.characters)
  }
}