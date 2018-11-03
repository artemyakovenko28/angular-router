import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Crisis} from './crisis';
import {Observable} from 'rxjs/internal/Observable';
import {CrisisService} from './crisis.service';
import {mergeMap, take} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {EMPTY} from 'rxjs/internal/observable/empty';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private crisisService: CrisisService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
    const id = +route.paramMap.get('id');
    return this.crisisService.getCrisis(id).pipe(
      take(1),
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
