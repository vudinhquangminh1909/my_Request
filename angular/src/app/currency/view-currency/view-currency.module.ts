import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewCurrencyRoutingModule } from './view-currency-routing.module';
import { ViewCurrencyComponent } from './view-currency.component';


@NgModule({
  declarations: [
    ViewCurrencyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewCurrencyRoutingModule
  ]
})
export class ViewCurrencyModule { }
