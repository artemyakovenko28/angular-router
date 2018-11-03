import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirm(message?: string): Observable<boolean> {
    return of(confirm(message || 'Discard changes?'));
  }
}
