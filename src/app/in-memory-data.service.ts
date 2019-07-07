import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './Data_Heroes/hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Spiderman' },
      { id: 4, name: 'Hulk' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Wolverine' },
      { id: 7, name: 'Thor' },
      { id: 8, name: 'Dead Pool' },
      { id: 9, name: 'Black Cat' },
      { id: 10, name: 'Black Panther' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1: 1;
  }

  constructor() { }
}
