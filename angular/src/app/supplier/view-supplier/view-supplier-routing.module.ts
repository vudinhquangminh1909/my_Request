import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSupplierComponent } from './view-supplier.component';

const routes: Routes = [{ path: '', component: ViewSupplierComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSupplierRoutingModule { }
