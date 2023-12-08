import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMyRequestComponent } from './view-my-request.component';

const routes: Routes = [{ path: '', component: ViewMyRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewMyRequestRoutingModule { }
