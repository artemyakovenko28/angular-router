import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { heroes } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(heroes);
  }

  getHero(id: number): Observable<Hero> {
    const currentHero = heroes.filter(hero => hero.id === id)[0];
    return of(currentHero);
  }
}
