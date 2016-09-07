import { Component }       from '@angular/core';
//import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'top-menu',
  templateUrl: 'app/topmenu.component.html',
  styleUrls: ['app/topmenu.component.css'],
})

export class TopmenuComponent {
  constructor(
    //private router: Router
    ) {
  }
  title = 'Top Menu';
  gotoAbout() {
    let link = ['About'];
    //this.router.navigate(link);
  }
  gotoHome() {
    let link = ['Home'];
    //this.router.navigate(link);
  }
  gotoHelp() {
    let link = ['Help'];
    //this.router.navigate(link);
  }
  gotoCustomerOrders() {
    let link = ['CustomerOrders'];
    //this.router.navigate(link);
  }
  gotoCustomers() {
    let link = ['Customers'];
    //this.router.navigate(link);
  }
  gotoCustomersPaginated() {
    let link = ['CustomersPaginated'];
    //this.router.navigate(link);
  }
  gotoTest1() {
    let link = ['Test1'];
    //this.router.navigate(link);
  }
}
