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
    this.pokemonApiService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon(index, e.name));
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
