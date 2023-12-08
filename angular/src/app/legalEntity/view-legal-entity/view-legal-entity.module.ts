import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewLegalEntityRoutingModule } from './view-legal-entity-routing.module';
import { ViewLegalEntityComponent } from './view-legal-entity.component';


@NgModule({
  declarations: [
    ViewLegalEntityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewLegalEntityRoutingModule
  ]
})
export class ViewLegalEntityModule { }
