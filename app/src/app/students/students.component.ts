import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../service/students.service';
import { Student } from '../service/model/student';

@Component({
               selector:    'app-students',
               templateUrl: './students.component.html',
           })
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  selectedStudent?: Student;
  searchTerm: string = '';

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentsService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

    //colour logic
    getGradeColor(grade: number): string {
        if (grade > 80) {
            return 'green';
        } else if (grade > 50) {
            return 'orange';
        } else {
            return 'red';
        }
    }

    selectStudent(student: Student): void {
        this.selectedStudent = student;
    }

    searchStudents(): void {
        this.studentsService.searchStudents(this.searchTerm).subscribe(students => {
            this.students = students;
        });
    }
}

