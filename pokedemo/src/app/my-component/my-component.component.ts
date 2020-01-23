import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';
import { IPokemons } from '../ipokemons';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  pockemons: Pokemon [] = [];
/*    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];*/

  test='';
  constructor(private pokservice: PokemonServiceService) {
    
   }

   foo(data:IPokemons){
      console.log(data);
      data.results.forEach((e , index ) => this.pockemons.push({ name: e.name, id : index}));
     // this.articles = data['articles'];
    
   }

  ngOnInit() {
    this.pokservice.getPokemons().subscribe( (data) => {
      data.results.forEach((e , index ) => this.pockemons.push({ name: e.name, id : index}));
    } );
  }

  selectPockemon(pok:Pokemon){
    console.log(pok);
  }

}
