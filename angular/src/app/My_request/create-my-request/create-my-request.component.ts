import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Kind_of_fal_Service } from 'src/app/API/Kind_Of_Fal/Kind_of_fal.service';
import { Legal_Entity_Service } from 'src/app/API/Legal_Entity/Legal_Entity.service';
import { My_request_Service } from 'src/app/API/My_request/My_request.service';
import { VAT_Service } from 'src/app/API/VAT/VAT.service';
import { Currency_Service } from 'src/app/API/currency/Currency.service';
import { department_Service } from 'src/app/API/department/department.service';
import { expence_code_Service } from 'src/app/API/expence_code/expence_code.service';
import { supplier_Service } from 'src/app/API/supplier/supplier.service';
import { form_childs_DTO, form_father_DTO, form_grandchidren_DTO } from 'src/app/API/My_request/model';
import { VAT_DTO } from 'src/app/API/VAT/model';
import { Currency_DTO } from 'src/app/API/currency/model';
import { department_DTO } from 'src/app/API/department/model';
import { expence_code_DTO } from 'src/app/API/expence_code/model';
import { Kind_Of_Fal_DTO } from 'src/app/API/Kind_Of_Fal/model';
import { Legal_Entity_DTO } from 'src/app/API/Legal_Entity/model';
import { supplier_DTO } from 'src/app/API/supplier/model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-my-request',
  templateUrl: './create-my-request.component.html',
  styleUrls: ['./create-my-request.component.scss']
})

export class CreateMyRequestComponent implements OnInit {

  parentForm: FormGroup;
  get_data_currency: Currency_DTO[];
  get_data_department: department_DTO[];
  get_data_expense: expence_code_DTO[];
  get_data_Kind_of_fal: Kind_Of_Fal_DTO[];
  get_data_Legal_Entity: Legal_Entity_DTO[];
  get_data_supplier: supplier_DTO[];
  get_data_VAT: VAT_DTO[];
  form_father_DTO: form_father_DTO;
  productId: number;
  isEditing: boolean = false;
  isEditingList: boolean[] = [];
  isEditingTripExpenseForm: boolean = false;
  hasEnabledForm: boolean = false;
  statusOptions = ['In Approval', 'Not Approval'];
  isEditingAddTripItem: boolean[] = [];
  isEditingTripItem: boolean[][] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private VAT_Service: VAT_Service,
    private supplier_Service: supplier_Service,
    private Currency_Service: Currency_Service,
    private department_Service: department_Service,
    private expense_code_Service: expence_code_Service,
    private Kind_of_fal_Service: Kind_of_fal_Service,
    private Legal_Entity_Service: Legal_Entity_Service,
    private My_request_Service: My_request_Service,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchData();

    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.My_request_Service.get_My_request_By_Id(this.productId).subscribe((result) => {
        this.populateForm(result);
      });
      this.isEditing = true;

      this.tripExpenses.controls.forEach((tripExpenseForm: FormGroup) => {
        tripExpenseForm.disable();
        this.isEditingList.push(false); // Initialize the isEditingList array
        this.isEditingAddTripItem.push(false);

      });
      setTimeout(() => {
        this.tripExpenses.controls.forEach((tripExpenseForm: FormGroup) => {
          tripExpenseForm.disable();
          this.isEditingList.push(false); // Initialize the isEditingList array
        });
      }, 100);
    } else {
      // For add case
      this.isEditing = false;
      this.addTripExpense(); // Add an initial trip expense form
      this.tripExpenses.controls[0].enable(); // Enable the first trip expense form
      this.isEditingList.push(true); // Set isEditingList to true for the first form
      this.isEditingAddTripItem.push(true);
    }
  }


  toggleEditing(index: number): void {
    const tripExpenseForm = this.tripExpenses.at(index) as FormGroup;

    if (tripExpenseForm) {
      const isEditing = this.isEditingList[index];

      // Toggle the isEditing property
      this.isEditingList[index] = !isEditing;
      this.isEditingAddTripItem[index] = !isEditing;

      if (!isEditing) {
        // Logic for enabling the form and setting the icon for editing
        tripExpenseForm.enable({ emitEvent: false });
      } else {
        // Logic for disabling the form
        tripExpenseForm.disable();
      }

      this.hasEnabledForm = this.isEditingList.some(enabled => enabled);
    }
  }

  initializeForm(): void {
    this.parentForm = this.fb.group({
      requester_Name: ['', Validators.required],
      email: ['', Validators.required],
      legal_Entity_Id: ['', Validators.required],
      department_Id: ['', Validators.required],
      request_No: ['', Validators.required],
      verify_Person_Id: ['', Validators.required],
      kind_Of_Fal_Id: ['', Validators.required],
      short_description: ['', Validators.required],
      suppier_name_Id: ['', Validators.required],
      vendor_account: ['', Validators.required],
      payment_Mettods_Id: ['', Validators.required],
      beneficiary_name: ['', Validators.required],
      beneficiary_account: ['', Validators.required],
      beneficiary_bank_name: ['', Validators.required],
      total_pre_tax_amount: ['', Validators.required],
      total_tax_amount: ['', Validators.required],
      total_amount: ['', Validators.required],
      Status: ['InApproval', Validators.required],
      tripExpenses: this.fb.array([]),
    });
  }

  fetchData(): void {
    this.Currency_Service.get_All_Currency().subscribe((result_Currency) => {
      this.get_data_currency = result_Currency;
    });

    this.department_Service.get_All_department().subscribe((result_department) => {
      this.get_data_department = result_department;
    });

    this.expense_code_Service.get_All_Kiexpence_code().subscribe((result_expense) => {
      this.get_data_expense = result_expense;
    });

    this.Kind_of_fal_Service.get_All_Kind_of_fales().subscribe((reuslt_Kind_of_fal) => {
      this.get_data_Kind_of_fal = reuslt_Kind_of_fal;
    });

    this.Legal_Entity_Service.get_All_Legal_Entities().subscribe((result_Legal_Entity) => {
      this.get_data_Legal_Entity = result_Legal_Entity;
    });

    this.supplier_Service.get_All_supplier().subscribe((result_supplier) => {
      this.get_data_supplier = result_supplier;
    });

    this.VAT_Service.get_All_VAT().subscribe((result_VAT) => {
      this.get_data_VAT = result_VAT;
    });
  }

  get tripExpenses(): FormArray {
    return this.parentForm.get('tripExpenses') as FormArray;
  }

  addTripExpense(): void {
    const tripExpenses = this.parentForm.get('tripExpenses') as FormArray;
    const tripExpense = this.fb.group({
      description: ['', Validators.required],
      department_Id: ['', Validators.required],
      freelancer: [false, Validators.required],
      pesonal_Refund: [false, Validators.required],
      amount: [0, Validators.required],
      currency_id: ['', Validators.required],
      exchange_rate: [0, Validators.required],
      vat: ['', Validators.required],
      total_Amount: [0, Validators.required],
      tripItems: this.fb.array([]),

    });
    tripExpenses.push(tripExpense);

    if (this.isEditing) {
      // For Edit page, disable the new form and show the Edit icon
      tripExpense.disable();
      this.isEditingList.push(false);
    } else {
      // For Add page, enable the new form and show the Save icon
      tripExpense.enable();
      this.isEditingList.push(true);
    }

  }

  getTripItems(tripExpense: FormGroup): FormArray {
    return tripExpense.get('tripItems') as FormArray;
  }

  removetripExpense(index: number): void {
    const tripExpenses = this.tripExpenses;
    if (tripExpenses.length > 1) {
      tripExpenses.removeAt(index);
    } else {
      this.snackBar.open("Cannot delete the last form.", "Close", {
        duration: 2000, // You can adjust the duration as needed
      });
    }
  }

  addTripItem(tripExpense: FormGroup): void {
    const tripItems = tripExpense.get('tripItems') as FormArray;
    tripItems.push(this.fb.group({
      attach_files: [''],
    }));
  }

  removeTripItem(tripExpenseIndex: number, tripItemIndex: number): void {
    const tripExpense = this.tripExpenses.at(tripExpenseIndex) as FormGroup;
    const tripItems = tripExpense.get('tripItems') as FormArray;
    tripItems.removeAt(tripItemIndex);
  }

  populateForm(data: any): void {
    this.parentForm.patchValue(data);

    // Populate tripExpenses
    const tripExpenses = data.tripExpenses as any[];
    if (tripExpenses && tripExpenses.length > 0) {
      tripExpenses.forEach(tripExpense => {
        this.addTripExpense();
        const lastIndex = this.tripExpenses.length - 1;
        this.tripExpenses.at(lastIndex).patchValue(tripExpense);

        // Populate tripItems
        const tripItems = tripExpense.tripItems as any[];
        if (tripItems && tripItems.length > 0) {
          tripItems.forEach(tripItem => {
            this.addTripItem(this.tripExpenses.at(lastIndex) as FormGroup);
            const lastItemIndex = this.getTripItems(this.tripExpenses.at(lastIndex) as FormGroup).length - 1;
            this.getTripItems(this.tripExpenses.at(lastIndex) as FormGroup).at(lastItemIndex).patchValue(tripItem);
          });
        }
      });
    }
  }

  saveData() {
    if (this.hasEnabledForm) {
      this.snackBar.open("The Trip Expense forms must be locked for saving.", "Close", {
        duration: 2000,
      });
      return;
    }

    const formData = this.parentForm.getRawValue();

    if (this.productId) {
      this.My_request_Service.update_My_request(this.productId, formData).subscribe((result) => {
        this.router.navigate(['/My_requests']);
      }, error => {
        console.error('Error updating request:', error);
      });
    } else {
      this.My_request_Service.create_My_request(formData).subscribe((result) => {
        this.router.navigate(['/My_requests']);
      }, error => {
        console.error('Error creating request:', error);
      });
    }
  }
  back() {
    this.router.navigate(['My_requests']);
  }
}





