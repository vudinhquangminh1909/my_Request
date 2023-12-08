import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EInvoiceRoutingModule } from './einvoice-routing.module';
import { EInvoiceComponent } from './einvoice.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EInvoiceComponent
  ],
  imports: [
    CommonModule,
    EInvoiceRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EInvoiceModule { }
