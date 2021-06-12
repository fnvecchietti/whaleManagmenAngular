import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from './stat-card/stat-card.component';
import { MatCardModule } from '@angular/material/card';
import { NgxEchartsModule } from 'ngx-echarts';
import { DefaultChartComponent } from './default-chart/default-chart.component';
import { NavComponent } from './nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [StatCardComponent, DefaultChartComponent, NavComponent, LoaderComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatOptionModule, MatSelectModule, MatButtonModule, MatTableModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    StatCardComponent,
    DefaultChartComponent,
    NavComponent,
    LoaderComponent,
    DynamicFormComponent
  ]
})
export class SharedModule { }
