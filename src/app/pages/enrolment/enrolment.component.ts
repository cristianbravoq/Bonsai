import { Component } from '@angular/core';

import { BonsaiService } from '../../pages/auth/services/student.service';
import { AuthService } from '../auth/services/auth.service';

import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-enrolment',
  templateUrl: './enrolment.component.html',
  styleUrls: ['./enrolment.component.css']
})
export class EnrolmentComponent {

  // Variable para no funcionar sin estar logeado
  userLogged = this.authSvc.getUserLogged();

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Opcion 1'},
    {value: 'pizza-1', viewValue: 'Opcion 2'},
    {value: 'tacos-2', viewValue: 'Opcion 3'},
  ];

  constructor(
    private StudentService: BonsaiService, 
    private readonly authSvc: AuthService,
    private router: Router
  ) { }

}
