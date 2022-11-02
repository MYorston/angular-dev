import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../app.modal'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() characters: Character[] = [];
  @Output() sideAssigned = new EventEmitter<Character>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSideAssigned(CharInfo: Character){
    this.sideAssigned.emit( CharInfo );
  }

}
