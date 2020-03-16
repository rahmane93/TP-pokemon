import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from '../../model/pokemon';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokemons: Pokemon[], searchTerm: string): Pokemon[] {
    if (pokemons && searchTerm) {
      return pokemons.filter( pokemon => pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    };
    return pokemons;
  }
}
