import { Component } from '@angular/core';
import { routing } from '../app.routing';
import { CustomerOrder } from './customer-order';
import { CustomerOrderDetailComponent } from './customer-order-detail.component';
import { CustomerOrderService } from './customer-order.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'customer-orders',
  templateUrl: 'app/sales/customer-orders.component.html',
  styleUrls:  ['app/sales/customer-orders.component.css'],
  /*directives: [CustomerOrderDetailComponent],*/
  providers: [CustomerOrderService]
})

export class CustomerOrdersComponent implements OnInit {
  customerorders: CustomerOrder[];
  selectedCustomerOrder: CustomerOrder;
  constructor(
    /*private router: Router,*/
    private CustomerOrderService: CustomerOrderService) { }
  getCustomerOrders() {
    this.CustomerOrderService.getCustomerOrders().then(customerorders => this.customerorders = customerorders);
  }
  ngOnInit() {
    this.getCustomerOrders();
  }
  onSelect(customerorder: CustomerOrder) { this.selectedCustomerOrder = customerorder; }
  gotoDetail() {
    /*routing.navigate(['CustomerOrderDetail', { id: this.selectedCustomerOrder.id }]);*/
  }
}
