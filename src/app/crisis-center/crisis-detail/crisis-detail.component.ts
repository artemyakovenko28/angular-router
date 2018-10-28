import {Component, OnInit} from '@angular/core';
import {Crisis} from '../crisis';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CrisisService} from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  editName: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private crisisService: CrisisService) {
  }

  ngOnInit() {
    this.getCrisis();
  }

  getCrisis(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get('id');
        return this.crisisService.getCrisis(id);
      })
    ).subscribe(crisis => {
      this.crisis = crisis;
      this.editName = crisis.name;
    });
  }

  onSave(): void {
    this.crisis.name = this.editName;
    this.goToCrises();
  }

  onCancel(): void {
    this.goToCrises();
  }

  goToCrises(): void {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {id: crisisId}], {relativeTo: this.route});
  }
}
