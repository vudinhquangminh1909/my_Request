import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMyRequestComponent } from './create-my-request.component';

const routes: Routes = [{ path: '', component: CreateMyRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMyRequestRoutingModule { }
