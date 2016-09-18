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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var topmenu_component_1 = require('./topmenu.component');
var about_component_1 = require('./about.component');
var home_component_1 = require('./home.component');
var help_component_1 = require('./help.component');
var customer_orders_component_1 = require('./sales/customer-orders.component');
var customers_component_1 = require('./sales/customers.component');
var customer_order_detail_component_1 = require('./sales/customer-order-detail.component');
var test1_component_1 = require('./test/test1.component');
var partner_detail_component_1 = require('./sales/partner/partner-detail.component');
var partner_list_component_1 = require('./mast/partner-list.component');
var partner_component_1 = require('./mast/partner.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                topmenu_component_1.TopmenuComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent,
                help_component_1.HelpComponent,
                customer_orders_component_1.CustomerOrdersComponent,
                customers_component_1.CustomersComponent,
                customer_order_detail_component_1.CustomerOrderDetailComponent,
                test1_component_1.Test1Component,
                partner_detail_component_1.PartnerDetailComponent,
                partner_list_component_1.PartnerListComponent,
                partner_component_1.PartnerComponent,
            ],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map