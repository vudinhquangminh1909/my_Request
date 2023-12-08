import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewSupplierRoutingModule } from './view-supplier-routing.module';
import { ViewSupplierComponent } from './view-supplier.component';


@NgModule({
  declarations: [
    ViewSupplierComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewSupplierRoutingModule
  ]
})
export class ViewSupplierModule { }
