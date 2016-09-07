import { Component, OnInit } from '@angular/core';
//import { RouteParams } from '@angular/router-deprecated';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'olu-partner-detail',
  templateUrl: 'app/sales/partner/partner-detail.component.html',
  //directives: [],
  providers: [CustomerService]
})

export class PartnerDetailComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
  //  private routeParams: RouteParams
  ) {
  }

  customer: Customer = null;
  customers: Customer[] = null;
  errorMessage: string;

  title = 'Partner részletes adatok';

  ngOnInit() {
    //let id = +this.routeParams.get('id');
    this.customerService.getCustomers()
      .subscribe(
        customers => this.customers = customers,
        error => this.errorMessage = <any>error
    )
    //this.customer = this.customers.filter(c => c.id == id)[0];
  }

  goBack() {
    window.history.back();
  }
}
