import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EInvoiceComponent } from './einvoice.component';

const routes: Routes = [{ path: '', component: EInvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EInvoiceRoutingModule { }
