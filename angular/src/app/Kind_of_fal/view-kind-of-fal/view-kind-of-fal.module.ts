import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewKindOfFalRoutingModule } from './view-kind-of-fal-routing.module';
import { ViewKindOfFalComponent } from './view-kind-of-fal.component';


@NgModule({
  declarations: [
    ViewKindOfFalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewKindOfFalRoutingModule
  ]
})
export class ViewKindOfFalModule { }
