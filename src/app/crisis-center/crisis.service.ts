import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Crisis} from './crisis';
import {crises} from './mock-crises';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor() { }

  getCrises(): Observable<Crisis[]> {
    return of(crises);
  }

  getCrisis(id: number): Observable<Crisis> {
    const fetchedCrisis: Crisis = (crises.filter(crisis => crisis.id === id)[0]);
    return of(fetchedCrisis);
  }
}
