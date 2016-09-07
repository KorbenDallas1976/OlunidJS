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
var customer_service_1 = require('../customer.service');
var PartnerDetailComponent = (function () {
    function PartnerDetailComponent(customerService) {
        this.customerService = customerService;
        this.customer = null;
        this.customers = null;
        this.title = 'Partner részletes adatok';
    }
    PartnerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //let id = +this.routeParams.get('id');
        this.customerService.getCustomers()
            .subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
        //this.customer = this.customers.filter(c => c.id == id)[0];
    };
    PartnerDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    PartnerDetailComponent = __decorate([
        core_1.Component({
            selector: 'olu-partner-detail',
            templateUrl: 'app/sales/partner/partner-detail.component.html',
            //directives: [],
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], PartnerDetailComponent);
    return PartnerDetailComponent;
}());
exports.PartnerDetailComponent = PartnerDetailComponent;
//# sourceMappingURL=partner-detail.component.js.map