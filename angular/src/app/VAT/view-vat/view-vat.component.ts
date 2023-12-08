import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VAT_Service } from 'src/app/API/VAT/VAT.service';
import { VAT_DTO } from 'src/app/API/VAT/model';

@Component({
  selector: 'app-view-vat',
  templateUrl: './view-vat.component.html',
  styleUrls: ['./view-vat.component.scss']
})
export class ViewVATComponent implements OnInit {

  form: FormGroup;
  get_All_data: any;
  isEditOpen = false;
  isModalOpen = false;
  currentID: number;


  constructor(
    private fb: FormBuilder,
    private VAT_Service: VAT_Service,
    private confirmation: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.VAT_Service.get_All_VAT().subscribe((result) => {
      this.get_All_data = result;
    })
  }

  buildForm(data: VAT_DTO = null) {
    this.form = this.fb.group({
      code: [data ? data.code : '', [Validators.required]],
      title: [data ? data.title : '', [Validators.required]],
      description: [data ? data.description : '', [Validators.required]],
      rate: [data ? data.rate : 0, [Validators.required]],
    })
  }

  create_VAT() {
    this.isModalOpen = true;
    this.buildForm()
  }

  edit_VAT(id: number) {
    this.VAT_Service.get_VAT_id(id).subscribe((response) => {
      this.buildForm(response);
      this.isEditOpen = true;
      this.currentID = id;
    });
  }


  save() {
    this.VAT_Service.create_VAT(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.ngOnInit();
    });
  }

  SaveEdit() {
    this.VAT_Service.update_VAT(this.currentID, this.form.value).subscribe(() => {
      this.isEditOpen = false;
      this.ngOnInit();
    });
  }

  delete_VAT(id: number) {
    this.VAT_Service.delete_VAT(id).subscribe(() => {
      this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
        if (message === Confirmation.Status.confirm) {
          this.ngOnInit();
        }
      });
    })
  }

}
