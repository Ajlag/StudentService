import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../models/Student';
import {StudentService} from '../service/student.service';
import {Router} from '@angular/router';
import {Ocene} from '../models/Ocene';

@Component({
  selector: 'app-moj-profil',
  templateUrl: './moj-profil.component.html',
  styleUrls: ['./moj-profil.component.css']
})
export class MojProfilComponent implements OnInit {

  myForm: FormGroup;
  hiddens = [];
  student: Student = null;
  ocen: Ocene[]=[];
  myLoad = false;
  mySub = false;

  ngOnInit(): void {
    if (!this.studentService.checkAuth()) {
      this.router.navigate(['/']);
    }
    this.initForm();
    this.getMe();
    this.getMojeOcene();
  }

  constructor(private studentService: StudentService, protected router: Router, private  fb: FormBuilder) {
  }

  initForm() {
    this.myForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      indeks: ['', Validators.required],
      adresa: ['', Validators.required],
      pol: ['', Validators.required]
    });
  }

  setValues(im: string, prez: string, ind: string, ad: string, p: string) {
    this.myForm.patchValue({
      ime: im,
      prezime: prez,
      indeks: ind,
      adresa: ad,
      pol: p,
    });
  }

  get edits() {
    return this.myForm.controls;
  }

  getMojeOcene() {
    let token = sessionStorage.getItem('student');
    this.studentService.getMojeOcene(token).subscribe((oc: Ocene[]) => {
      this.ocen = oc;
    });
  }
  getMe() {
    const token = sessionStorage.getItem('student');

    this.studentService.getMe(token).subscribe(student => {
      console.log(JSON.stringify(student));
      this.student = student;
      this.setValues(student.ime, student.prezime, student.indeks, student.adresa, student.pol);
    }, err => {
      this.router.navigate(['/']);
    });
  }

  onUpdate() {
    if (this.myForm.invalid) {
      alert('Nevalidna forma!');
      return;
    }
    const data = {
      ime: this.edits.ime.value,
      prezime: this.edits.prezime.value,
      indeks: this.student.indeks,
      adresa: this.edits.adresa.value,
      pol: this.edits.pol.value
    };

    console.log(data);
    this.studentService.editMe(data).subscribe(response => {
      console.log(response);
      this.getMe();
      alert(response);
    }), err => {
      alert('Izmene nisu uspele');
      console.log(err);
    };
  }

}
