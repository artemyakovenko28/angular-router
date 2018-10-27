import {Component, OnInit} from '@angular/core';
import {Crisis} from '../crisis';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CrisisService} from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;

  constructor(private route: ActivatedRoute,
              private crisisService: CrisisService) {
  }

  ngOnInit() {
    this.getCrisis();
  }

  getCrisis(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.crisisService.getCrisis(+params.get('id'))
      )
    ).subscribe(crisis => this.crisis = crisis);
    // let id;
    // this.route.paramMap.subscribe(params => id = params.get('id'));
    // console.log(`crisis id = ${id}`);
    // this.crisisService.getCrisis(id).subscribe(crisis => this.crisis = crisis);
  }

}
