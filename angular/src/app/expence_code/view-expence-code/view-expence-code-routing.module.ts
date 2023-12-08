import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewExpenceCodeComponent } from './view-expence-code.component';

const routes: Routes = [{ path: '', component: ViewExpenceCodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewExpenceCodeRoutingModule { }
