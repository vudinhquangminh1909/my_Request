import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDepartmentComponent } from './view-department.component';

const routes: Routes = [{ path: '', component: ViewDepartmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDepartmentRoutingModule { }
