import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './academic.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AcademicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AcademicRoutingModule
  ]
})
export class AcademicModule { }
