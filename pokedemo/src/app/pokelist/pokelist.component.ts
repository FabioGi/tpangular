import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  constructor(private pokservice: PokemonServiceService) { }

  ngOnInit() {
    this.pokservice.getPokemons().subscribe((data)=>{
      console.log(data);
     // this.articles = data['articles'];
    });
  }

}
