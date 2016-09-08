import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Customer } from './customer';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  constructor (private http: Http) {}
  private customersUrl = 'http://localhost:3333/api/customers';  // URL to web API

  getCustomers (): Observable<Customer[]> {
    return this.http.get(this.customersUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  };

  getCustomer (id: number) {
    return this.getCustomers()
    .map(list => list.filter(customer => customer.id === id)[0])
  };

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  };

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = error.message || error.statusText || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  };

  /*
  getCustomer(id: number) {
    return Promise.resolve(Customers).then(
    customerorders => customerorders.filter(customerorder => customerorder.id === id)[0]
    );
  }
  */
}
