import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolmentRoutingModule } from './enrolment-routing.module';
import { EnrolmentComponent } from './enrolment.component';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [
    EnrolmentComponent
  ],
  imports: [
    CommonModule,
    EnrolmentRoutingModule,
    MaterialExampleModule
  ]
})
export class EnrolmentModule { }
