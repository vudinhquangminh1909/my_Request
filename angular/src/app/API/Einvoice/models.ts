export interface EInvoiceItem {
    invoice_item_id: string;
    line_number: string;
    item_name: string;
    unit: string;
    unit_price: number;
    quantity: number;
    vat_percentage: number;
    vat_amount: number;
    total_price_before_vat: number;
    total_price_after_vat: number;
    discount_percentage: number;
    discount_amount: number;
    vat_type: string;
    is_free: boolean;
    is_discount: boolean;
  }
  
  export interface EInvoiceAttachment {
    name: string;
    url: string;
    type: string;
  }
  
  export interface EInvoiceValidationResult {
    status: string;
    key: string;
  }
  
  export interface EInvoiceValidation {
    status: string;
    results: EInvoiceValidationResult[];
  }
  
  export interface EInvoiceTaxBreakdown {
    vat_rate: number;
    total_vat_amount: number;
    total_amount_with_vat: number;
    total_amount_without_vat: number;
  }
  
  export interface EInvoice {
    invoice_id: string;
    company_id: string;
    template_code: string;
    invoice_name: string;
    invoice_number: string;
    invoice_series: string;
    invoice_type: string;
    ref_code: string;
    gdt_code: string;
    issued_date: string;
    approved_by: string;
    approval_status: string;
    buyer_address_line: string;
    buyer_display_name: string;
    buyer_email: string;
    buyer_legal_name: string;
    buyer_tax_code: string;
    discount_amount: number;
    payment_method_name: string;
    note: string;
    seller_address_line: string;
    seller_legal_name: string;
    seller_tax_code: string;
    seller_bank_account: string;
    seller_bank_name: string;
    total_amount_with_vat: number;
    total_amount_without_vat: number;
    total_amount_with_vat_in_words: string;
    total_vat_amount: number;
    vat_percentage: number;
    email_id: string;
    vat_rate: number;
    is_voided: boolean;
    currency: string;
    exchange_rate: number;
    payment_status: string;
    tax_breakdowns: EInvoiceTaxBreakdown[];
    po_numbers: string[];
    invoice_items: EInvoiceItem[];
    attachments: EInvoiceAttachment[];
    validations: EInvoiceValidation;
  }