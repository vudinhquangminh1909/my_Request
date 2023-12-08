import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewMyRequestRoutingModule } from './view-my-request-routing.module';
import { ViewMyRequestComponent } from './view-my-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    ViewMyRequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewMyRequestRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class ViewMyRequestModule { }
