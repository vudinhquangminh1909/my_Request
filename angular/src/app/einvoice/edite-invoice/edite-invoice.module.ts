import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditeInvoiceRoutingModule } from './edite-invoice-routing.module';
import { EditeInvoiceComponent } from './edite-invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditeInvoiceComponent
  ],
  imports: [
    CommonModule,
    EditeInvoiceRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EditeInvoiceModule { }
