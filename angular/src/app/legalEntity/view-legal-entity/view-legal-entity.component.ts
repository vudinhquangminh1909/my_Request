import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Legal_Entity_Service } from 'src/app/API/Legal_Entity/Legal_Entity.service';
import { Legal_Entity_DTO } from 'src/app/API/Legal_Entity/model';

@Component({
  selector: 'app-view-legal-entity',
  templateUrl: './view-legal-entity.component.html',
  styleUrls: ['./view-legal-entity.component.scss']
})
export class ViewLegalEntityComponent implements OnInit {

  form: FormGroup;
  get_All_data: any;
  currentID: number;
  isEditOpen = false;
  isModalOpen = false;

  constructor(
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private Legal_Entity_service: Legal_Entity_Service,
  ) { }

  ngOnInit(): void {
    this.Legal_Entity_service.get_All_Legal_Entities().subscribe((result) => {
      this.get_All_data = result
    })
  }

  delete_Legal_Entity(id: number) {
    this.Legal_Entity_service.delete_Legal_Entity(id).subscribe(() => {
      this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
        if (message === Confirmation.Status.confirm) {
          this.ngOnInit();
        }
      });
    })
  }

  buildForm(data: Legal_Entity_DTO = null) {
    this.form = this.fb.group({
      code: [data ? data.code : '', [Validators.required]],
      description: [data ? data.description : '', Validators.required],
      importBy: [data ? data.importBy : '', [Validators.required, Validators.email]],
    });
  }

  create_Legal_Entity() {
    this.isModalOpen = true;
    this.buildForm();
  }

  edit_Legal_Entity(id: number) {
    this.Legal_Entity_service.get_Legal_Entity_By_Id(id).subscribe((response) => {
      this.buildForm(response);
      this.isEditOpen = true;
      this.currentID = id;
    });
  }


  save() {
    this.Legal_Entity_service.create_Legal_Entity(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.ngOnInit();
    });
  }

  SaveEdit() {
    this.Legal_Entity_service.update_Legal_Entity(this.currentID, this.form.value).subscribe(() => {
      this.isEditOpen = false;
      this.ngOnInit();
    });
  }
}
