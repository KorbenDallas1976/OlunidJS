import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'customers',
  templateUrl: 'app/sales/customers.component.html',
  styleUrls:  ['app/sales/customers.component.css'],
  providers: [CustomerService]
})

export class CustomersComponent implements OnInit {
  constructor(
    //private router: Router,
    private customerService: CustomerService) { }
  customers: Customer[];
  selectedCustomer: Customer;
  errorMessage: string;
  ngOnInit() {
    this.getCustomers();
  }
  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(
        customers => this.customers = customers,
        error => this.errorMessage = <any>error
    );
  }
  onSelect(customer: Customer) {
    this.selectedCustomer = customer;
    //this.router.navigate(['PartnerDetail', { id: this.selectedCustomer.id }]);
  }
  /*
  gotoDetail() {
    this.router.navigate(['CustomerOrderDetail', { id: this.selectedCustomerOrder.id }]);
  }
  */
}
