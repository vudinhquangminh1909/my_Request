import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLegalEntityComponent } from './view-legal-entity.component';

const routes: Routes = [{ path: '', component: ViewLegalEntityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewLegalEntityRoutingModule { }
