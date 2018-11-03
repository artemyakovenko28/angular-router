import {Component, OnInit} from '@angular/core';
import {Crisis} from '../crisis';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CrisisService} from '../crisis.service';
import {Observable} from 'rxjs/internal/Observable';
import {DialogService} from '../../dialog.service';

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
              private crisisService: CrisisService,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: {crisis: Crisis}) => {
      this.crisis = data.crisis;
      this.editName = data.crisis.name;
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

  canDeactivate(): Observable<boolean> | boolean {

    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }
}
