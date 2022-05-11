import { Component } from '@angular/core';

// OBTENIENDO DATOS DEL ESTUDIANTE PARA PERSONALIZAR EL DOCUMENTO
import { BonsaiService } from '../../pages/auth/services/student.service';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

import { } from '../../pipes/search.pipe'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  handleSearch(value: string) {
    //Valor que se escribe en el input
    this.filtro_valor = value;
  }

  // Variable para no funcionar sin estar logeado
  userLogged = this.authSvc.getUserLogged();

  listNoticias: any[] = [];
  loading = false;

  filtro_valor = '';
  students: any = [];

  constructor(
    private StudentService: BonsaiService, 
    private readonly authSvc: AuthService,
    private router: Router
  ) { }

  async onLogout():Promise<void> {
      this.authSvc.logout();
  }

  ngOnInit(): void {
    this.StudentService.getStudents().subscribe(
      res => {
        this.students = res;
        // console.log(this.students);
      },
      err => console.log(err)
    );
  }

}