import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHeroId: number;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedHeroId = +params.get('id');
        return this.heroService.getHeroes();
      })
    ).subscribe(heroes => this.heroes = heroes);
  }
}
