import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../models/Student';
import {Korisnik} from '../models/Korisnik';
import {Router} from '@angular/router';
import {StudentService} from '../service/student.service';
import {formatNumber} from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  loginForm: FormGroup;

  newStudent: Student = null;
  statiKorisnik: Korisnik = null;


  constructor(private fb: FormBuilder, private studentService: StudentService, protected router: Router) {

  }

  ngOnInit() {
    this.createLoginForm();
    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signupForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      indeks: ['', Validators.required, Validators.pattern('([0-9]{3}-[0-9]{3}/[0-9]{4})')],
      adresa: ['', Validators.required],
      pol: ['', Validators.required],
      lozinka: ['', Validators.required]
    });
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      indeksL: ['', Validators.required],
      lozinkaL: ['', Validators.required]
    });
  }

  getAuth() {
    return this.studentService.checkAuth();
  }

  get signs() {
    return this.signupForm.controls;
  }

  get logInfo() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.newStudent = new Student(this.signs.ime.value, this.signs.prezime.value, this.signs.indeks.value, this.signs.adresa.value, this.signs.pol.value, this.signs.lozinka.value);

    this.studentService.createStudent(this.newStudent).subscribe(
      (student: Student) => {
        console.log(JSON.stringify(student));
        let auth = {
          indeks: student.indeks
        };

        sessionStorage.setItem('student', auth.indeks);
        this.router.navigate(['/']);
      }, err => console.log(JSON.stringify(err)));

  }

  refresh(): void {
    window.location.reload();
  }

  onLogin() {
    this.statiKorisnik = new Korisnik(this.logInfo.indeksL.value, this.logInfo.lozinkaL.value);
    this.studentService.login(this.statiKorisnik).subscribe((data: any) => {
      console.log(JSON.stringify(data));
      sessionStorage.setItem('student', data.indeks);
      this.router.navigate(['/pocetna']);
    },
      error => console.log(JSON.stringify(error)));
  }
}
