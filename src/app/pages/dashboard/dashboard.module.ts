import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }
  ]
})
export class DashboardModule { }
