import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'modify', component: ModifyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionManagerRoutingModule { }
