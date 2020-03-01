import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { FilterPokemonPipePipe } from './components/pipe/filter-pokemon--pipe.pipe';
import {PokemonServiceService} from './services/pokemon-service.service';

const routes: Routes = [
  {path: 'app', component: AppComponent } ,
  {path: '**', redirectTo: 'app'}
];
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    FilterPokemonPipePipe,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokemonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
