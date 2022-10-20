import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokApiDataService {
  constructor(private http: HttpClient) {}

  loadPokemonsData() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  }

  loadMorePoksData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
