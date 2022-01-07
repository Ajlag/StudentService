import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../models/Student';
import {Korisnik} from '../models/Korisnik';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private us: UserService, protected router: Router) {
  }

  signupForm: FormGroup;
  loginForm: FormGroup;

  submitted = false;
  pokusajPrijave = false;
  loading = false;
  loginTry = false;
  loginLoad = false;
  newUser: Student = null;
  stariKorisnik: Korisnik = null;

  ngOnInit(): void {
    this.createSignupForm();
    this.createLoginForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      indeks: ['', Validators.required],
      adresa: ['', Validators.required],
      pol: ['', Validators.required],
      lozinka: ['', Validators.required]
    });
  }

  get scs() {
    return this.signupForm.controls;
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      indeksL: ['', Validators.required],
      lozinkaL: ['', Validators.required]
    });
  }

  onSubmit() {

    this.newUser = new Student(this.scs.ime.value, this.scs.prezime.value, this.scs.indeks.value, this.scs.adresa.value, this.scs.pol.value, this.scs.lozinka.value);

    this.us.register(this.newUser).subscribe(
      (user: Korisnik) => {
        console.log(JSON.stringify(user));
        const auth = {
          indeks: user.indeks
        };

        sessionStorage.setItem('user', auth.indeks);
        this.router.navigate(['/']);
      },
      err => console.log(JSON.stringify(err)));
  }

  get logInfo() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.stariKorisnik = new Korisnik(this.logInfo.indeksL.value, this.logInfo.lozinkaL.value);
    this.us.login(this.stariKorisnik).subscribe((data: any) => {
        console.log(JSON.stringify(data));
        sessionStorage.setItem('user', data.indeks);

        this.router.navigate(['/pocetna']);
      },
      err => console.log(JSON.stringify(err)));
  }
}
