import { Component, OnInit } from '@angular/core';
import {CrisisService} from '../crisis.service';
import {Crisis} from '../crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[];

  constructor(private crisisService: CrisisService) { }

  ngOnInit() {
    this.getCrises();
  }

  getCrises(): void {
    this.crisisService.getCrises().subscribe(crises => this.crises = crises);
  }

}
