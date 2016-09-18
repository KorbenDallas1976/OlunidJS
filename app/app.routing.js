"use strict";
var router_1 = require('@angular/router');
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
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'help', component: help_component_1.HelpComponent },
    // --- Master Data ---
    { path: 'mast/partnerlist', component: partner_list_component_1.PartnerListComponent },
    { path: 'mast/partner/:id', component: partner_component_1.PartnerComponent },
    // --- Sales ---
    { path: 'sales/customerorders', component: customer_orders_component_1.CustomerOrdersComponent },
    { path: 'sales/customers', component: customers_component_1.CustomersComponent },
    { path: 'sales/customerorder/:id', component: customer_order_detail_component_1.CustomerOrderDetailComponent },
    { path: 'test/test1', component: test1_component_1.Test1Component },
    { path: 'sales/partners/:id', component: partner_detail_component_1.PartnerDetailComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map