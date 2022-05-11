import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

import { Router, ActivatedRoute } from '@angular/router';

// OBTENIENDO DATOS DEL ESTUDIANTE PARA PERSONALIZAR EL DOCUMENTO
import { BonsaiService } from '../../pages/auth/services/student.service';
import * as moment from 'moment'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit{

  // Variable para no funcionar sin estar logeado
  userLogged = this.authSvc.getUserLogged();

  student: any = [];

  fecha: Number | undefined;
  fechaSigt: Number | undefined;
  gradeSigt = undefined;

  constructor(private readonly authSvc: AuthService, private BonsaiService: BonsaiService,
    private Router: Router, private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.BonsaiService.getCalificacion(params['id'])
      .subscribe (
        res => {
          this.student = res;
          // console.log(this.student);
        },
        err => console.error(err)
      )
    }

    const hoy = moment();
    const hoy_year = parseInt(hoy.format('Y'), 10);
    this.fecha = hoy_year;
    this.fechaSigt = hoy_year + 1;

  }

}