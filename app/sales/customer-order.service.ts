import { Injectable } from '@angular/core';
import { CustomerOrders } from './mock-customer-orders';
import { CustomerOrder } from './customer-order';

@Injectable()
export class CustomerOrderService {
  getCustomerOrders() {
    return Promise.resolve(CustomerOrders);
  };
  getCustomersOrderSlowly() {
    return new Promise<CustomerOrder[]>(resolve =>
    setTimeout(()=>resolve(CustomerOrders), 2000) // 2 seconds
    );
  };
  getCustomerOrder(id: number) {
    return Promise.resolve(CustomerOrders).then(
    customerorders => customerorders.filter(customerorder => customerorder.id === id)[0]
    );
  }
}
