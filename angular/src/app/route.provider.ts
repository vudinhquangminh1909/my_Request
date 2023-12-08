import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        name: 'Category',
        iconClass: 'fa fa-angle-double-down',
        layout: eLayoutType.application,
        order: 2,
      },
      {
        path: '/view_legal_Entitys',
        name: 'Legal Entitys',
        iconClass: 'fas fa-list',
        parentName: 'Category',
        layout: eLayoutType.application,
      },
      {
        path: '/view_departments',
        name: 'Departments',
        iconClass: 'fas fa-list',
        parentName: 'Category',
        layout: eLayoutType.application,
      },
      {
        path: '/view_Kind_of_fals',
        name: 'Kind Of Fals',
        iconClass: 'fas fa-list',
        parentName: 'Category',
        layout: eLayoutType.application,
      },
      {
        path: '/view_expence_codes',
        name: 'Expence Codes',
        iconClass: 'fas fa-list',
        parentName: 'Category',
        layout: eLayoutType.application,
      },
      ,
      {
        path: '/view_currencys',
        name: 'Currencys',
        iconClass: 'fas fa-list',
        parentName: 'Category',
        layout: eLayoutType.application,
      },
      {
        path: '/VATs',
        name: 'VAT',
        iconClass: 'fas fa-list',
        parentName: 'Category',
        layout: eLayoutType.application,
      },
      {
        path: '/suppliers',
        name: 'Suppliers',
        iconClass: 'fas fa-list',
        parentName: 'Category',
        layout: eLayoutType.application,
      },

      {
        name: 'My request',
        iconClass: 'fa fa-angle-double-down',
        layout: eLayoutType.application,
        order: 3,
      },
      {
        path: 'My_requests',
        name: 'My requests',
        parentName: 'My request',
        iconClass: 'fa fa-list',
        layout: eLayoutType.application
      },
      {
        path: '/EInvoice',
        name: 'Einvoice',
        order: 4,
        iconClass: 'fa fa-list',
        layout: eLayoutType.application
      }
    ]);
  };
}
