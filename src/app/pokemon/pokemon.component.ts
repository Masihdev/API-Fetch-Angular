import { Component, OnInit } from '@angular/core';
import { PokApiDataService } from '../services/pok-api-data.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemon: any[] = [];
  constructor(public service: PokApiDataService) {}

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.service.loadPokemons().subscribe((api: any) => {
      // console.log(api);
      this.pokemon.push(api);
      console.log('pokemon JSON is', this.pokemon);
    });
  }
}
