import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewVATRoutingModule } from './view-vat-routing.module';
import { ViewVATComponent } from './view-vat.component';


@NgModule({
  declarations: [
    ViewVATComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewVATRoutingModule
  ]
})
export class ViewVATModule { }
