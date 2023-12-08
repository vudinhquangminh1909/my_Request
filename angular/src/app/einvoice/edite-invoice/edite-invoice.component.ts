import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EInvoiceService } from 'src/app/API/Einvoice/einvoice.service';
import { EInvoice } from 'src/app/API/Einvoice/models';

@Component({
  selector: 'app-edite-invoice',
  templateUrl: './edite-invoice.component.html',
  styleUrls: ['./edite-invoice.component.scss']
})
export class EditeInvoiceComponent implements OnInit {
 


  invoiceId: number;
  invoiceData: EInvoice;
  invoiceForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private einvoiceService: EInvoiceService,
    private fb: FormBuilder
  ) {
    
   }

  ngOnInit(): void {
    this.invoiceId = +this.route.snapshot.paramMap.get('id');
    this.getInvoiceDetails();
    
  }
  getInvoiceDetails(): void {
    this.einvoiceService.getEInvoiceById(this.invoiceId).subscribe(
      (data) => {
        console.log('Data from API:', data);

        this.invoiceForm.patchValue({
          salesUnit: data.seller_legal_name,
          taxCode: data.seller_tax_code,
          address: data.seller_address_line,
          buyerTaxCode: data.buyer_tax_code,
          buyerLegalName: data.buyer_legal_name,
          buyerAddress: data.buyer_address_line,
          buyer: data.buyer_display_name,
          email: data.buyer_email,
          
          paymentMethod: data.payment_method_name,
          // Patch more form controls as needed
        });
      },
      (error) => {
        console.error('Error fetching invoice details:', error);
      }
    );
  }
}
