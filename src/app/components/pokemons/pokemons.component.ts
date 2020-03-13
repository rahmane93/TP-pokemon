import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../model/pokemon';
import {PokemonServiceService} from '../../services/pokemon-service.service';
import {PokemonInfo} from '../../model/PokemonInfo';
import {PokemonPartageServiceService} from '../../services/pokemon-partage-service.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [PokemonServiceService]
})
export class PokemonsComponent implements OnInit {
  name: string;
  pokemons: Pokemon[] = [];
  searchTerm: string;
  pokemonSelectedInfos: PokemonInfo;
  pokemonSelectedId: number;
  constructor(private  pokemonApiService: PokemonServiceService, private pokemonPartageServiceService: PokemonPartageServiceService) {
    this.pokemons = [];
  }
  ngOnInit() {

    this.pokemonApiService.getPokemons().subscribe((data) => {
      console.log(data);
      data.results.forEach((e, index) => { this.pokemons.push(new Pokemon(index, e.name, e.url)); });
    });
  }
  getPokemonSelectedInfo() {
    if (this.pokemonSelectedId) {
      this.pokemonApiService.getPokemonInfos(this.pokemonSelectedId).subscribe((data) => {
        this.pokemonSelectedInfos = data;
        this.pokemonPartageServiceService.setValue(this.name);
      });
    }
  }
}
