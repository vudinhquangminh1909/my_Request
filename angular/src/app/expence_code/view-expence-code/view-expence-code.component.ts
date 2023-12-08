import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { expence_code_Service } from 'src/app/API/expence_code/expence_code.service';
import { expence_code_DTO } from 'src/app/API/expence_code/model';

@Component({
  selector: 'app-view-expence-code',
  templateUrl: './view-expence-code.component.html',
  styleUrls: ['./view-expence-code.component.scss']
})
export class ViewExpenceCodeComponent implements OnInit {

  form: FormGroup;
  get_All_data: any;
  currentID: number;
  isEditOpen = false;
  isModalOpen = false;

  constructor(
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private expence_code_Service: expence_code_Service,
  ) { }

  ngOnInit(): void {
    this.expence_code_Service.get_All_Kiexpence_code().subscribe((result) => {
      this.get_All_data = result
    })
  }

  delete_expence_code(id: number) {
    this.expence_code_Service.delete_expence_code(id).subscribe(() => {
      this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
        if (message === Confirmation.Status.confirm) {
          this.ngOnInit();
        }
      });
    })
  }

  buildForm(data: expence_code_DTO = null) {
    this.form = this.fb.group({
      code: [data ? data.code : '', [Validators.required]],
      description: [data ? data.description : '', Validators.required],
      importBy: [data ? data.importBy : '', [Validators.required, Validators.email]],
    });
  }

  create_expence_code() {
    this.isModalOpen = true;
    this.buildForm();
  }

  edit_expence_code(id: number) {
    this.expence_code_Service.get_expence_code_By_Id(id).subscribe((response) => {
      this.buildForm(response);
      this.isEditOpen = true;
      this.currentID = id;
    });
  }


  save() {
    this.expence_code_Service.create_expence_code(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.ngOnInit();
    });
  }

  SaveEdit() {
    this.expence_code_Service.update_expence_code(this.currentID, this.form.value).subscribe(() => {
      this.isEditOpen = false;
      this.ngOnInit();
    });
  }
}

