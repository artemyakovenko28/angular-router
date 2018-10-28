import { Component, OnInit } from '@angular/core';
import {CrisisService} from '../crisis.service';
import {Crisis} from '../crisis';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[];
  selectedCrisisId;

  constructor(private route: ActivatedRoute,
              private crisisService: CrisisService) { }

  ngOnInit() {
    this.getCrises();
    this.route.paramMap.subscribe(params => {
      this.selectedCrisisId = params.get('id');
    });
  }

  getCrises(): void {
    this.crisisService.getCrises().subscribe(crises => this.crises = crises);
  }

}
