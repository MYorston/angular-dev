import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../app.modal'
import { StarWarsService } from '../star-wars.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters: Character[] = [];
  
  constructor(private router: ActivatedRoute, private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.router.params.subscribe( (params) =>{
      this.characters = this.starWarsService.getCharacters(params['side']);
    })
  } 
}
