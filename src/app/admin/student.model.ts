import {Day} from './day.model';

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  days: Day[];
}

export const students: Student[] = [
  {
    id: 0,
    firstName: 'Artem',
    lastName: 'Yakovenko',
    days: [
      {
        studentId: 0,
        score: 1,
        date: new Date('2018.10.01')
      },
      {
        studentId: 0,
        score: 2,
        date: new Date('2018.10.02')
      },
      {
        studentId: 0,
        score: 3,
        date: new Date('2018.10.03')
      },
      {
        studentId: 0,
        score: 4,
        date: new Date('2018.10.04')
      },
      {
        studentId: 0,
        score: 5,
        date: new Date('2018.10.05')
      },
    ]
  },
  {
    id: 1,
    firstName: 'Anton',
    lastName: 'Yakovenko',
    days: [
      {
        studentId: 1,
        score: 6,
        date: new Date('2018.10.01')
      },
      {
        studentId: 1,
        score: 7,
        date: new Date('2018.10.02')
      },
      {
        studentId: 1,
        score: 8,
        date: new Date('2018.10.03')
      },
      {
        studentId: 1,
        score: 9,
        date: new Date('2018.10.04')
      },
      {
        studentId: 1,
        score: 10,
        date: new Date('2018.10.05')
      },
    ]
  },
  {
    id: 2,
    firstName: 'Jason',
    lastName: 'Statham',
    days: [
      {
        studentId: 2,
        score: 11,
        date: new Date('2018.10.01')
      },
      {
        studentId: 2,
        score: 12,
        date: new Date('2018.10.02')
      },
      {
        studentId: 2,
        score: 13,
        date: new Date('2018.10.03')
      },
      {
        studentId: 2,
        score: 14,
        date: new Date('2018.10.04')
      },
      {
        studentId: 2,
        score: 15,
        date: new Date('2018.10.05')
      },
    ]
  },
  {
    id: 3,
    firstName: 'Oliver',
    lastName: 'Queen',
    days: [
      {
        studentId: 3,
        score: 16,
        date: new Date('2018.10.01')
      },
      {
        studentId: 3,
        score: 17,
        date: new Date('2018.10.02')
      },
      {
        studentId: 3,
        score: 18,
        date: new Date('2018.10.03')
      },
      {
        studentId: 3,
        score: 19,
        date: new Date('2018.10.04')
      },
      {
        studentId: 3,
        score: 20,
        date: new Date('2018.10.05')
      },
    ]
  },
  {
    id: 4,
    firstName: 'Silvester',
    lastName: 'Stalone',
    days: [
      {
        studentId: 4,
        score: 21,
        date: new Date('2018.10.01')
      },
      {
        studentId: 4,
        score: 22,
        date: new Date('2018.10.02')
      },
      {
        studentId: 4,
        score: 23,
        date: new Date('2018.10.03')
      },
      {
        studentId: 4,
        score: 24,
        date: new Date('2018.10.04')
      },
      {
        studentId: 4,
        score: 25,
        date: new Date('2018.10.05')
      },
    ]
  },
];
