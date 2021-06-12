import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagerRoutingModule } from './account-manager-routing.module';
import { AddComponent } from './add/add.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    AccountManagerRoutingModule,
    SharedModule
  ]
})
export class AccountManagerModule { }
