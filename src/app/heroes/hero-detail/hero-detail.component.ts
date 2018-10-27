import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHero();
  }

  // getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  // }

  getHero(): void {
    this.route.paramMap.pipe(
      switchMap(params =>
        this.heroService.getHero(+params.get('id')))
    ).subscribe(hero => this.hero = hero);
  }

  goToHeroes(): void {
    const heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }

}
