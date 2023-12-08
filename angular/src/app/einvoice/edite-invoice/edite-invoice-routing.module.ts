import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeInvoiceComponent } from './edite-invoice.component';

const routes: Routes = [{ path: '', component: EditeInvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditeInvoiceRoutingModule { }
