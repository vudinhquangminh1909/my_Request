export interface form_father_DTO {
    requester_Name?: string;
    email?: string;
    legal_Entity_Id?: number;
    department_Id?: number;
    request_No?: string;
    verify_Person_Id?: number;
    kind_Of_Fal_Id?: number;
    short_description?: string;
    suppier_name_Id?: number;
    vendor_account?: string;
    payment_Mettods_Id?: number;
    beneficiary_name?: string;
    beneficiary_account?: string;
    beneficiary_bank_name?: string;
    total_pre_tax_amount?: number;
    total_tax_amount?: number;
    total_amount?: number;
    tripExpenses: form_childs_DTO[];
}

export interface form_childs_DTO {
    description?: string;
    department_Id?: number;
    freelancer?: true;
    pesonal_Refund?: false;
    amount?: number;
    currency_id?: number;
    exchange_rate?: number;
    vat?: number;
    total_Amount?: number;
    getTripItems: form_grandchidren_DTO[];
}

export interface form_grandchidren_DTO {
    attach_files?: string,
}
