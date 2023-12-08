import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewExpenceCodeRoutingModule } from './view-expence-code-routing.module';
import { ViewExpenceCodeComponent } from './view-expence-code.component';


@NgModule({
  declarations: [
    ViewExpenceCodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewExpenceCodeRoutingModule
  ]
})
export class ViewExpenceCodeModule { }
