import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Crisis} from './crisis';
import {CRISES} from './mock-crises';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  private static nextCrisisId;

  constructor() { }

  getCrises(): Observable<Crisis[]> {
    return of(CRISES);
  }

  getCrisis(id: number | string): Observable<Crisis> {
    const fetchedCrisis: Crisis = (CRISES.filter(crisis => crisis.id === id)[0]);
    return of(fetchedCrisis);
  }

  addCrisis(name: string): void {
    name = name.trim();
    if (name) {
      const crisis: Crisis = {
        id: CrisisService.nextCrisisId++,
        name: name
      };
      CRISES.push(crisis);
    }
  }
}
