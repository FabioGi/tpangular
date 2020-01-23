import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemons, IPokemon } from './ipokemons';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private httpClient: HttpClient ) { }
  
  
  public getPokemons() : Observable<IPokemons>{
    return this.httpClient.get<IPokemons>(`https://pokeapi.co/api/v2/pokemon`);
  }
  public addpokemon(poke: IPokemon) : Observable<IPokemons>{
    return this.httpClient.post<IPokemons>(`https://pokeapi.co/api/v2/addpokemon`, poke);
  }
}
