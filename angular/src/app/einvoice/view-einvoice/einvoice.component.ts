import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EInvoiceService } from 'src/app/API/Einvoice/einvoice.service';
import { EInvoice } from 'src/app/API/Einvoice/models'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-einvoice',
  templateUrl: './einvoice.component.html',
  styleUrls: ['./einvoice.component.scss']
})
export class EInvoiceComponent implements OnInit {

  allEInvoices: EInvoice[];
  invoiceForm: FormGroup;

  constructor(
    private einvoiceService: EInvoiceService,
    private confirmation: ConfirmationService,
    private router: Router
  ) {
    
   }

  ngOnInit(): void {
    this.einvoiceService.getAllEInvoices().subscribe((result) => {
      this.allEInvoices = result;
    });
  }

  delete(id: number) {
    this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
      if (message === Confirmation.Status.confirm) {
        this.einvoiceService.deleteEInvoice(id).subscribe(() => {
          this.ngOnInit();
        });
      }
    });
  }

  edit(id: number) {
    this.router.navigate(['einvoice/edit-einvoice', id]);
  }

  createNewEInvoice() {
    this.router.navigate(['einvoice/create']);
  }
}