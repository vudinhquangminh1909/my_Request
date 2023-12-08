import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewDepartmentRoutingModule } from './view-department-routing.module';
import { ViewDepartmentComponent } from './view-department.component';


@NgModule({
  declarations: [
    ViewDepartmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewDepartmentRoutingModule
  ]
})
export class ViewDepartmentModule { }
