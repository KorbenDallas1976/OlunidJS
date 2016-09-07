"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var customer_service_1 = require('./customer.service');
var CustomersComponent = (function () {
    function CustomersComponent(
        //private router: Router,
        customerService) {
        this.customerService = customerService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers()
            .subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
    };
    CustomersComponent.prototype.onSelect = function (customer) {
        this.selectedCustomer = customer;
        //this.router.navigate(['PartnerDetail', { id: this.selectedCustomer.id }]);
    };
    CustomersComponent = __decorate([
        core_1.Component({
            selector: 'customers',
            templateUrl: 'app/sales/customers.component.html',
            styleUrls: ['app/sales/customers.component.css'],
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map