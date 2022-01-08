import {Component, OnInit} from '@angular/core';
import {Student} from '../models/Student';
import {StudentService} from '../service/student.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';
import {StudentFilterPipe} from '../student-filter.pipe';

@Component({
  selector: 'app-prikaz-studenata',
  templateUrl: './prikaz-studenata.component.html',
  styleUrls: ['./prikaz-studenata.component.css']

})
export class PrikazStudenataComponent implements OnInit {

  editForm: FormGroup;
  editLoad = false;
  searchTerm: string;

  constructor(private studentService: StudentService, protected router: Router, private fb: FormBuilder) {
  }

  studenti: Student[] = [];
  selectedOne: Student = null;

  ngOnInit(): void {
    this.getStudents();
    this.initEditForm();
  }

  getStudents() {
    this.studentService.getStudent().subscribe((stud: Student[]) => {
      this.studenti = stud;
    });
  }

  initEditForm() {
    this.editForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      indeks: ['', Validators.required],
      adresa: ['', Validators.required],
      pol: ['', Validators.required],
      lozinka: ['', Validators.required]
    });
  }

  selectOne(student: Student) {
    this.selectedOne = student;
    this.editForm.patchValue({
      ime: this.selectedOne.ime,
      prezime: this.selectedOne.prezime,
      indeks: this.selectedOne.indeks,
      adresa: this.selectedOne.adresa,
      pol: this.selectedOne.pol,
      lozinka: this.selectedOne.lozinka
    });
  }

  get editS() {
    return this.editForm.controls;
  }

  onUpdate() {
    const stud = new Student(this.editS.ime.value, this.editS.prezime.value, this.editS.indeks.value, this.editS.adresa.value, this.editS.pol.value, this.editS.lozinka.value);
    console.log(stud);
    this.studentService.updateStudent(stud).subscribe(response => {
        alert(JSON.stringify('Student je izmenjen!'));
        console.log(response);
        this.getStudents();
      },
      err => console.log(err)
    );

    this.editLoad = false;
  }

  deleteStudent(indeks: string) {
    this.studentService.deleteStudent(indeks).subscribe(
      response => {
        alert('Student je izbrisat!');
        console.log(response);
      }, err => console.log(err)
    );
  }


  deleteOne(id: string) {
    this.studentService.deleteStudent(id).subscribe(
      response => {
        this.getStudents();
        alert('Student je obrisan!');
        console.log(response);
      }, err => console.log(err));
  }
}
