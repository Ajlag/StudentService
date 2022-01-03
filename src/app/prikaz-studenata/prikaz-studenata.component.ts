import {Component, OnInit} from '@angular/core';
import {Student} from '../models/Student';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-prikaz-studenata',
  templateUrl: './prikaz-studenata.component.html',
  styleUrls: ['./prikaz-studenata.component.css']
})
export class PrikazStudenataComponent implements OnInit {

  constructor(private studentService: StudentService) {
  }

  studenti: Student[] = [];

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudent().subscribe((stud: Student[]) => {
      this.studenti = stud;
    });
  }
}
