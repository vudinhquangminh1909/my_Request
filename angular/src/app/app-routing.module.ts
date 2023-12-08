import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  { path: 'view_legal_Entitys', loadChildren: () => import('./legalEntity/view-legal-entity/view-legal-entity.module').then(m => m.ViewLegalEntityModule) },
  { path: 'view_departments', loadChildren: () => import('./department/view-department/view-department.module').then(m => m.ViewDepartmentModule) },
  { path: 'view_Kind_of_fals', loadChildren: () => import('./Kind_of_fal/view-kind-of-fal/view-kind-of-fal.module').then(m => m.ViewKindOfFalModule) },
  { path: 'view_expence_codes', loadChildren: () => import('./expence_code/view-expence-code/view-expence-code.module').then(m => m.ViewExpenceCodeModule) },
  { path: 'view_currencys', loadChildren: () => import('./currency/view-currency/view-currency.module').then(m => m.ViewCurrencyModule) },
  { path: 'VATs', loadChildren: () => import('./VAT/view-vat/view-vat.module').then(m => m.ViewVATModule) },
  { path: 'suppliers', loadChildren: () => import('./supplier/view-supplier/view-supplier.module').then(m => m.ViewSupplierModule) },
  { path: 'My_requests', loadChildren: () => import('./My_request/view-my-request/view-my-request.module').then(m => m.ViewMyRequestModule) },
  { path: 'create_My_requests', loadChildren: () => import('./My_request/create-my-request/create-my-request.module').then(m => m.CreateMyRequestModule) },
  { path: 'My_requests/create_My_requests/:id', loadChildren: () => import('./My_request/create-my-request/create-my-request.module').then(m => m.CreateMyRequestModule) },

  { path: 'EInvoice', loadChildren: () => import('./einvoice/view-einvoice/einvoice.module').then(m => m.EInvoiceModule) },
  { path: 'einvoice/edit-einvoice/:id', loadChildren: () => import('./einvoice/edite-invoice/edite-invoice.module').then(m => m.EditeInvoiceModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
