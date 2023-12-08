import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCurrencyComponent } from './view-currency.component';

const routes: Routes = [{ path: '', component: ViewCurrencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCurrencyRoutingModule { }
