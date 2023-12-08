import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kind_of_fal_Service } from 'src/app/API/Kind_Of_Fal/Kind_of_fal.service';
import { Kind_Of_Fal_DTO } from 'src/app/API/Kind_Of_Fal/model';

@Component({
  selector: 'app-view-kind-of-fal',
  templateUrl: './view-kind-of-fal.component.html',
  styleUrls: ['./view-kind-of-fal.component.scss']
})
export class ViewKindOfFalComponent implements OnInit {

  form: FormGroup;
  get_All_data: any;
  currentID: number;
  isEditOpen = false;
  isModalOpen = false;

  constructor(
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private Kind_of_fal_Service: Kind_of_fal_Service,
  ) { }

  ngOnInit(): void {
    this.Kind_of_fal_Service.get_All_Kind_of_fales().subscribe((result) => {
      this.get_All_data = result
    })
  }

  delete_Kind_of_fal(id: number) {
    this.Kind_of_fal_Service.delete_Kind_of_fal(id).subscribe(() => {
      this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
        if (message === Confirmation.Status.confirm) {
          this.ngOnInit();
        }
      });
    })
  }

  buildForm(data: Kind_Of_Fal_DTO = null) {
    this.form = this.fb.group({
      code: [data ? data.code : '', [Validators.required]],
      description: [data ? data.description : '', Validators.required],
      importBy: [data ? data.importBy : '', [Validators.required, Validators.email]],
    });
  }

  create_Kind_of_fal() {
    this.isModalOpen = true;
    this.buildForm();
  }

  edit_Kind_of_fal(id: number) {
    this.Kind_of_fal_Service.get_Kind_of_fal_By_Id(id).subscribe((response) => {
      this.buildForm(response);
      this.isEditOpen = true;
      this.currentID = id;
    });
  }


  save() {
    this.Kind_of_fal_Service.create_Kind_of_fal(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.ngOnInit();
    });
  }

  SaveEdit() {
    this.Kind_of_fal_Service.update_Kind_of_fal(this.currentID, this.form.value).subscribe(() => {
      this.isEditOpen = false;
      this.ngOnInit();
    });
  }
}
