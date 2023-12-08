import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateMyRequestRoutingModule } from './create-my-request-routing.module';
import { CreateMyRequestComponent } from './create-my-request.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { FormatNumberDirective } from '../format-number.directive';


@NgModule({
  declarations: [
    CreateMyRequestComponent,
    FormatNumberDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateMyRequestRoutingModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class CreateMyRequestModule { }
