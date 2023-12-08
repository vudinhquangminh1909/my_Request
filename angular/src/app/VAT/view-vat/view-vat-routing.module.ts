import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewVATComponent } from './view-vat.component';

const routes: Routes = [{ path: '', component: ViewVATComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewVATRoutingModule { }
