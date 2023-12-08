import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { department_Service } from 'src/app/API/department/department.service';
import { department_DTO } from 'src/app/API/department/model';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent implements OnInit {

  form: FormGroup;
  get_All_data: any;
  currentID: number;
  isEditOpen = false;
  isModalOpen = false;

  constructor(
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private department_Service: department_Service,
  ) { }

  ngOnInit(): void {
    this.department_Service.get_All_department().subscribe((result) => {
      this.get_All_data = result
    })
  }

  delete_department(id: number) {
    this.department_Service.delete_department(id).subscribe(() => {
      this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
        if (message === Confirmation.Status.confirm) {
          this.ngOnInit();
        }
      });
    })
  }

  buildForm(data: department_DTO = null) {
    this.form = this.fb.group({
      code: [data ? data.code : '', [Validators.required]],
      description: [data ? data.description : '', Validators.required],
      importBy: [data ? data.importBy : '', [Validators.required, Validators.email]],
    });
  }

  create_department() {
    this.isModalOpen = true;
    this.buildForm();
  }

  edit_department(id: number) {
    this.department_Service.get_department_id(id).subscribe((response) => {
      this.buildForm(response);
      this.isEditOpen = true;
      this.currentID = id;
    });
  }


  save() {
    this.department_Service.create_department(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.ngOnInit();
    });
  }

  SaveEdit() {
    this.department_Service.update_department(this.currentID, this.form.value).subscribe(() => {
      this.isEditOpen = false;
      this.ngOnInit();
    });
  }
}
