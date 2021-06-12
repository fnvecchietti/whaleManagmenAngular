import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionManagerRoutingModule } from './transaction-manager-routing.module';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ModifyComponent } from './modify/modify.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AddComponent,
    DeleteComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TransactionManagerRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class TransactionManagernModule { }
