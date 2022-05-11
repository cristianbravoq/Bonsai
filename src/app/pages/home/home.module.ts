import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { MaterialExampleModule } from 'src/material.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MaterialExampleModule,
  ]
})
export class HomeModule { }
