import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../app.modal'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() character: Character = {name: 'Test', alignment: 'light'};
@Output() sideAssigned = new EventEmitter<Character>();
  constructor() { 
  }

  ngOnInit(): void {
  }

  onAsign(side: 'light' | 'dark'){
    this.sideAssigned.emit({ ...this.character, alignment: side });
  }

}
