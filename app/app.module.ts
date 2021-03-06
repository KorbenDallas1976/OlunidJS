import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HttpModule} from '@angular/http';

import { routing,
         appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { TopmenuComponent } from './topmenu.component';
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


@NgModule({
 imports: [
   BrowserModule,
   FormsModule,
   routing,
   HttpModule
 ],
 declarations: [
   AppComponent,
   TopmenuComponent,
   AboutComponent,
   HomeComponent,
   HelpComponent,
   CustomerOrdersComponent,
   CustomersComponent,
   CustomerOrderDetailComponent,
   Test1Component,
   PartnerDetailComponent,
   PartnerListComponent,
   PartnerComponent,
 ],
 providers: [
   appRoutingProviders
 ],
 bootstrap: [ AppComponent ]
})

export class AppModule {
}
