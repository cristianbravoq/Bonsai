import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/services/auth.service';

import { Router, ActivatedRoute } from '@angular/router';

// OBTENIENDO DATOS DEL ESTUDIANTE PARA PERSONALIZAR EL DOCUMENTO
import { BonsaiService } from '../../pages/auth/services/student.service';
import { Cursos } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  // Variable para no funcionar sin estar logeado
  userLogged = this.authSvc.getUserLogged();

  student: any = [];
  Calificacion: number[] = [];
  Indicadores: number[] = [];

  curso: Cursos = {
    Calificacion: 0,
    Indicadores: 0,
  };

  constructor(
    private readonly authSvc: AuthService, private BonsaiService: BonsaiService,
    private Router: Router, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.BonsaiService.getCalificacion(params['id'])
      .subscribe (
        res => {
          this.student = res;
          console.log(this.student);
        },
        err => console.error(err)
      )
    }
  }

  updateCurso(i: any) {
    // console.log(this.student);
    // console.log(i);
    // console.log(this.student[i].idCursos);
    this.curso.Calificacion = this.Calificacion[i];
    this.curso.Indicadores = this.Indicadores[i];
    this.BonsaiService.updateCurso(this.student[i].idCursos, this.curso)
      .subscribe(
        res => {
          // this.Router.navigate(['/dashboard']);
        },
        err => console.error(err)
      )
  }

}