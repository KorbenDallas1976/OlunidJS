import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { HelpComponent } from './help.component';
import { CustomerOrdersComponent } from './sales/customer-orders.component';
import { CustomersComponent } from './sales/customers.component';
import { CustomerOrderDetailComponent } from './sales/customer-order-detail.component';
import { Test1Component } from './test/test1.component';
import { PartnerDetailComponent } from './sales/partner/partner-detail.component';
import { PartnerListComponent } from './mast/partner-list.component';
import { PartnerComponent } from './mast/partner.component';

const appRoutes: Routes = [
  {path: '', /*name: 'Home',*/ component: HomeComponent},
  {path: 'about', /*name: 'About',*/ component: AboutComponent},
  {path: 'help', /*name: 'Help',*/ component: HelpComponent},
  // --- Master Data ---
  {path: 'mast/partnerlist', component: PartnerListComponent},
  {path: 'mast/partner/:id', component: PartnerComponent},
  // --- Sales ---
  {path: 'sales/customerorders', /*name: 'CustomerOrders',*/ component: CustomerOrdersComponent},
  {path: 'sales/customers', /*name: 'Customers',*/ component: CustomersComponent},
  {path: 'sales/customerorder/:id', /*name: 'CustomerOrderDetail',*/ component: CustomerOrderDetailComponent},
  {path: 'test/test1', /*name: 'Test1',*/ component: Test1Component},
  {path: 'sales/partners/:id', /*name: 'PartnersDetail',*/ component: PartnerDetailComponent},
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
