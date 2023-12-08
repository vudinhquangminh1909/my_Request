import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewKindOfFalComponent } from './view-kind-of-fal.component';

const routes: Routes = [{ path: '', component: ViewKindOfFalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewKindOfFalRoutingModule { }
