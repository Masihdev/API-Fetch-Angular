import { Component, OnInit } from '@angular/core';
import { PokApiDataService } from '../services/pok-api-data.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];
  constructor(public service: PokApiDataService) {}

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.service.loadPokemonsData().subscribe((api: any) => {
      // console.log(api);
      api.results.forEach((result: any) => {
        this.service
          .loadMorePoksData(result.name)
          .subscribe((apiUnique: any) => {
            this.pokemons.push(apiUnique);
            console.log('pokemon JSON is', this.pokemons);
          });
      });
    });
  }
}
