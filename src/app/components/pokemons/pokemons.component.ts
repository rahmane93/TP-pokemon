import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../model/pokemon';
import {forEach} from '@angular/router/src/utils/collection';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(private  http: HttpClient) {
    this.pokemons = [
      new Pokemon(0, 'Alpha'),
      new Pokemon(1, 'Beta'),
      new Pokemon(2, 'Lambda'),
      new Pokemon(3, 'Gamma'),
      new Pokemon(4, 'Sygma'),
      new Pokemon(5, 'Teta'),
      new Pokemon(6, 'Pi'),
      new Pokemon(7, 'Rho')
    ];
  }
  ngOnInit() {
   const resp = this.http.get('https://pokeapi.co/api/v2/pokemon/1');
   resp.subscribe((data) => console.log(data));
  }
  getListPokemon() {
    return this.pokemons;
  }
  selectedPokemon(name: string) {
      this.pokemons.forEach(function (pokemon) {
        if (pokemon.name.toLowerCase() === name.toLocaleLowerCase()) {
          console.log(pokemon.id);
        }
      });
  }
}
