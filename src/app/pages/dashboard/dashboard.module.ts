import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

// Pipes
import { SearchComponent } from 'src/app/shared/search/search.component';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
  ]
})
export class DashboardModule { }
