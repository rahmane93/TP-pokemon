import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../model/pokemon';
import {forEach} from '@angular/router/src/utils/collection';
import {HttpClient} from '@angular/common/http';
import {PokemonServiceService} from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(private  pokemonApiService: PokemonServiceService) {
    this.pokemons = [
      new Pokemon(0, 'Alpha',null),
      new Pokemon(1, 'Beta',null),
      new Pokemon(2, 'Lambda',null),
      new Pokemon(3, 'Gamma',null),
      new Pokemon(4, 'Sygma',null),
      new Pokemon(5, 'Teta',null),
      new Pokemon(6, 'Pi',null),
      new Pokemon(7, 'Rho',null)
    ];
  }
  ngOnInit() {
    this.pokemonApiService.getPokemons().subscribe((data) => {
      console.log(data);
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon(index, e.name, e.url));
      });
    });
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
