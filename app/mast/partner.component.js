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
var router_1 = require('@angular/router');
var partner_service_1 = require('./partner.service');
var PartnerComponent = (function () {
    /*
    @Input()
    partner: Partner = null;
  */
    function PartnerComponent(partnerService, route) {
        this.partnerService = partnerService;
        this.route = route;
        this.partner = null;
        this.title = 'Partner details';
    }
    PartnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.partnerService.getPartner(id)
                .then(function (partner) { return _this.partner = partner; });
        });
        //let id = +this.routeParams.get('id');
        /*
        this.partnerService.getPartners()
          .subscribe(
            partners => this.partners = partners,
            error => this.errorMessage = <any>error
        )
        */
        //this.partner = this.partners.filter(c => c.id == id)[0];
    };
    PartnerComponent.prototype.goBack = function () {
        window.history.back();
    };
    PartnerComponent.prototype.onSave = function () {
        this.partnerService.updatePartner(this.partner)
            .then(this.goBack);
        //
    };
    PartnerComponent = __decorate([
        core_1.Component({
            selector: 'olu-partner',
            templateUrl: 'app/mast/partner.component.html',
            //directives: [],
            providers: [partner_service_1.PartnerService]
        }), 
        __metadata('design:paramtypes', [partner_service_1.PartnerService, router_1.ActivatedRoute])
    ], PartnerComponent);
    return PartnerComponent;
}());
exports.PartnerComponent = PartnerComponent;
//# sourceMappingURL=partner.component.js.map