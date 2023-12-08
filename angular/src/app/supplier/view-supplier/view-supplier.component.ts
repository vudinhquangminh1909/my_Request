import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { supplier_DTO } from 'src/app/API/supplier/model';
import { supplier_Service } from 'src/app/API/supplier/supplier.service';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.scss']
})
export class ViewSupplierComponent implements OnInit {

  form: FormGroup;
  get_All_data: any;
  currentID: number;
  isEditOpen = false;
  isModalOpen = false;

  constructor(
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private supplier_Service: supplier_Service,
  ) { }

  ngOnInit(): void {
    this.supplier_Service.get_All_supplier().subscribe((result) => {
      this.get_All_data = result
    })
  }

  delete_supplier(id: number) {
    this.supplier_Service.delete_supplier(id).subscribe(() => {
      this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
        if (message === Confirmation.Status.confirm) {
          this.ngOnInit();
        }
      });
    })
  }

  buildForm(data: supplier_DTO = null) {
    this.form = this.fb.group({
      code: [data ? data.code : '', [Validators.required]],
      description: [data ? data.description : '', Validators.required],
      importBy: [data ? data.importBy : '', [Validators.required, Validators.email]],
    });
  }

  create_supplier() {
    this.isModalOpen = true;
    this.buildForm();
  }

  edit_supplier(id: number) {
    this.supplier_Service.get_supplier_By_Id(id).subscribe((response) => {
      this.buildForm(response);
      this.isEditOpen = true;
      this.currentID = id;
    });
  }


  save() {
    this.supplier_Service.create_supplier(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.ngOnInit();
    });
  }

  SaveEdit() {
    this.supplier_Service.update_supplier(this.currentID, this.form.value).subscribe(() => {
      this.isEditOpen = false;
      this.ngOnInit();
    });
  }
}
