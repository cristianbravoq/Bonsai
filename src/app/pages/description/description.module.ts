import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionComponent } from './description.component';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    MaterialExampleModule
  ]
})
export class DescriptionModule { }
