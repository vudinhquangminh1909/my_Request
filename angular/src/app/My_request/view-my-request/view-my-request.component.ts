import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { My_request_Service } from 'src/app/API/My_request/My_request.service';
import { form_father_DTO } from 'src/app/API/My_request/model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-my-request',
  templateUrl: './view-my-request.component.html',
  styleUrls: ['./view-my-request.component.scss']
})
export class ViewMyRequestComponent implements OnInit {

  select_form_father_DTO = {} as form_father_DTO;
  selected_My_Request_Id: any;
  isModalOpen = false;
  isFormDisabled = true;
  form_view_id: FormGroup;

  get_All_Data: form_father_DTO[];

  parentForms: any[] = [];



  constructor(
    private My_request_Service: My_request_Service,
    private confirmation: ConfirmationService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.My_request_Service.get_All_My_request().subscribe((result) => {
      this.get_All_Data = result
    })

  }

  delete(id: number) {
    this.confirmation.warn('::Are You Sure To Delete', '::AreYouSure').subscribe((message) => {
      if (message === Confirmation.Status.confirm) {
        this.My_request_Service.delete_My_request(id).subscribe(() => {
          this.ngOnInit();
        })
      }
    });
  }

  edit(id: number) {
    this.router.navigate(['My_requests/create_My_requests/', id]);
  }

  addNewRequest() {
    this.router.navigate(['create_My_requests'])
  }

  updateStatus(id: number, newStatus: string) {
    // Call the service method to update the status
    this.My_request_Service.updateStatus(id, newStatus).subscribe(
      () => {
        console.log('Status updated successfully');
        // Update the status in the specific item in parentForms array
        const updatedItemIndex = this.parentForms.findIndex(item => item.id === id);
        if (updatedItemIndex !== -1) {
          this.parentForms[updatedItemIndex].Status = newStatus;
        }
        this.openSnackBar('Status updated successfully', 'Success');
        this.ngOnInit();

      },
      (error) => {
        this.openSnackBar('Error updating status', 'Error');
        console.error('Error updating status:', error);

      }
    );
  }
  getStatusClass(status: string): string {
    if (status === 'In Approval') {
      return 'in-approval'; // Add a CSS class for 'InApproval' status
    } else if (status === 'Not Approval') {
      return 'not-approval'; // Add a CSS class for 'NotApproval' status
    } else {
      return ''; // Default class if status is neither 'InApproval' nor 'NotApproval'
    }
  }
  private openSnackBar(message: string, panelClass: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      panelClass: panelClass, // Use the provided panelClass directly
    });
  }

  buildForm() {
    this.form_view_id = this.fb.group({
      requester_Name: ['' || this.select_form_father_DTO.requester_Name, Validators.required],
      email: ['' || this.select_form_father_DTO.email, Validators.required],
      request_No: ['' || this.select_form_father_DTO.request_No, Validators.required],
    });
  }


  showDetails(id: any): void {
    this.My_request_Service.get_My_request_By_Id(id).subscribe((result) => {
      this.select_form_father_DTO = result;
      this.isFormDisabled = true;
      this.buildForm();
      this.isModalOpen = true;
      this.selected_My_Request_Id = result.id;
    })
  }


}
