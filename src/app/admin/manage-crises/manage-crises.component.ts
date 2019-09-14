import { Component, OnInit } from '@angular/core';
import {Student, students} from '../student.model';

@Component({
  selector: 'app-manage-crises',
  templateUrl: './manage-crises.component.html',
  styleUrls: ['./manage-crises.component.scss']
})
export class ManageCrisesComponent implements OnInit {
  students: Student[];

  constructor() { }

  ngOnInit() {
    this.students = students;
  }

  calculateSum(studentId: number): number {
    if (studentId !== null || studentId !== undefined) {
      return this.students
        .filter(student => student.id === studentId)
        .map(student => student.days)[0]
        .map(day => day.score)
        .reduce((x, y) => x + y);
    } else {
      return 0;
    }
  }

}
