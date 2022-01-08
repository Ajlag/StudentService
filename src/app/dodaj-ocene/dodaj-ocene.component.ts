import { Component, OnInit } from '@angular/core';
import {OceneService} from '../service/ocene.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ocene} from '../models/Ocene';
import {StudentService} from '../service/student.service';
import {Student} from '../models/Student';

@Component({
  selector: 'app-dodaj-ocene',
  templateUrl: './dodaj-ocene.component.html',
  styleUrls: ['./dodaj-ocene.component.css']
})
export class DodajOceneComponent implements OnInit {

  oceneForma: FormGroup;
  novaOcena: Ocene = null;
  student: Student = null;
  constructor(private ocenaService: OceneService,private studentService: StudentService, protected router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dodajOcene();
    this.getIndeks();
  }

  dodajOcene(){
    this.oceneForma = this.fb.group({
      nazivPredmeta: ['', Validators.required],
      datum: ['',Validators.required],
      ocena: ['',Validators.required],
      opis: ['',Validators.required],
      indeks: ['',Validators.required]
    })
  }

  setValues(inde: string){
    this.oceneForma.patchValue({
      indeks: inde
    });
  }

  get newO(){
    return this.oceneForma.controls;
  }

  getIndeks(){
    const token= sessionStorage.getItem('student');

    this.studentService.getMe(token).subscribe(user =>{
      console.log(JSON.stringify(user))
      this.student = user;
      this.setValues(user.indeks);
    }, error => {
      console.log(error);
      this.router.navigate(['/']);
    })
  }
  onCreate(){
    if(this.oceneForma.invalid){
      alert("Nevalidna forma.");
      return;
    }

    this.novaOcena = new Ocene(this.newO.nazivPredmeta.value, this.newO.datum.value, Number(this.newO.ocena.value),this.newO.opis.value,0,this.newO.indeks.value);
    console.log(this.novaOcena);

    this.ocenaService.createOcenu(this.novaOcena).subscribe(response =>{
      alert(JSON.stringify("Nova ocena je dodata"))
    console.log(response)

    }, error => console.log(error)
      );
  }
}
