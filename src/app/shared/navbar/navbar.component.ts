import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { BonsaiService } from '../../pages/auth/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged = this.authSvc.getUserLogged();

  constructor( private readonly authSvc: AuthService,
    private router : Router, private StudentService: BonsaiService) { }

    async onLogout():Promise<void> {
      this.authSvc.logout();
    }

  ngOnInit(): void {
  }

}
