import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected router: Router, private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  getAuth() {
    return this.studentService.checkAuth();
  }

  logout(){
    this.studentService.logout();
    this.router.navigate(['/']);
  }

}
