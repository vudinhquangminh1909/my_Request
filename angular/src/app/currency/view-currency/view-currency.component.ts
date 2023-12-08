import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency_Service } from 'src/app/API/currency/Currency.service';
import { Currency_DTO } from 'src/app/API/currency/model';

@Component({
  selector: 'app-view-currency',
  templateUrl: './view-currency.component.html',
  styleUrls: ['./view-currency.component.scss']
})
export class ViewCurrencyComponent implements OnInit {

  form: FormGroup;
  get_All_data: any;
  currentID: number;
  isEditOpen = false;
  isModalOpen = false;

  constructor(
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private Currency_Service: Currency_Service,
  ) { }

  ngOnInit(): void {
    this.Currency_Service.get_All_Currency().subscribe((result) => {
      this.get_All_data = result
    })
  }

  delete_Currency(id: number) {
    this.Currency_Service.delete_Currency(id).subscribe(() => {
      this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
        if (message === Confirmation.Status.confirm) {
          this.ngOnInit();
        }
      });
    })
  }

  buildForm(data: Currency_DTO = null) {
    this.form = this.fb.group({
      code: [data ? data.code : '', [Validators.required]],
      title: [data ? data.title : '', [Validators.required]],
      exchangeRate: [data ? data.exchangeRate : 0, [Validators.required]],
      modifiedBy: [data ? data.modifiedBy : '', [Validators.required]],
    });
  }

  create_Currency() {
    this.isModalOpen = true;
    this.buildForm();
  }

  edit_Currency(id: number) {
    this.Currency_Service.get_Currency_id(id).subscribe((response) => {
      this.buildForm(response);
      this.isEditOpen = true;
      this.currentID = id;
    });
  }


  save() {
    this.Currency_Service.create_Currency(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.ngOnInit();
    });
  }

  SaveEdit() {
    this.Currency_Service.update_Currency(this.currentID, this.form.value).subscribe(() => {
      this.isEditOpen = false;
      this.ngOnInit();
    });
  }
}

