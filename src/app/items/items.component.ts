import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../app.modal'
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() character: Character = {name: 'Test', alignment: 'light'};

  constructor(private starWarsService: StarWarsService) { 
  }

  ngOnInit(): void {
  }

  onAsign(side: 'light' | 'dark'){
    this.starWarsService.updateAlignment({ ...this.character, alignment: side });
  }

}
