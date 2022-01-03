import {Component, OnInit} from '@angular/core';
import {Student} from '../models/Student';
import {StudentService} from '../service/student.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dodaj-studenta',
  templateUrl: './dodaj-studenta.component.html',
  styleUrls: ['./dodaj-studenta.component.css']
})
export class DodajStudentaComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private studentService: StudentService, protected router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initCreateForm();
  }

  initCreateForm() {
    this.createForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      indeks: ['', Validators.required],
      adresa: ['', Validators.required],
      pol: ['', Validators.required],
      lozinka: ['', Validators.required],
    });
  }

  get newS() {
    return this.createForm.controls;
  }

  onCreate() {
    const student = new Student(this.newS.ime.value, this.newS.prezime.value, this.newS.indeks.value, this.newS.adresa.value, this.newS.pol.value, this.newS.lozinka.value);
    console.log(student);

    this.studentService.createStudent(student).subscribe(response => {
      alert(JSON.stringify('Student je dodat!'));
      console.log(response);
    }, err => console.log(err));
  }
}
