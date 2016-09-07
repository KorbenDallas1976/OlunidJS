import { Component, OnInit } from '@angular/core';
//import { RouteParams } from '@angular/router-deprecated';

import { CustomerOrder } from './customer-order';
import { CustomerOrderService } from './customer-order.service';

@Component({
  selector: 'olu-customer-order-detail',
  templateUrl: 'app/sales/customer-order-detail.component.html',
  styleUrls:  ['app/sales/customer-order-detail.component.css'],
  providers: [CustomerOrderService]
})
export class CustomerOrderDetailComponent implements OnInit {
  customerorder: CustomerOrder;

  constructor(
    private customerorderService: CustomerOrderService,
    //private routeParams: RouteParams
  ) {
  }

  ngOnInit() {
    /*let id = +this.routeParams.get('id');
    this.customerorderService.getCustomerOrder(id)
      .then(customerorder => this.customerorder = customerorder);*/
  }

  goBack() {
    window.history.back();
  }
}
