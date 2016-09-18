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
// NG
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// APP
var partner_1 = require('./partner');
var partner_service_1 = require('./partner.service');
var PartnerListComponent = (function () {
    function PartnerListComponent(router, partnerService) {
        this.router = router;
        this.partnerService = partnerService;
    }
    PartnerListComponent.prototype.ngOnInit = function () {
        this.getPartners();
    };
    PartnerListComponent.prototype.getPartners = function () {
        var _this = this;
        this.partnerService.getPartners()
            .then(function (partners) { return _this.partners = partners; });
    };
    PartnerListComponent.prototype.onSelect = function (partner) {
        this.selectedPartner = partner;
        var link = ['/mast/partner', this.selectedPartner.id];
        this.router.navigate(link);
    };
    PartnerListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        var p = new partner_1.Partner();
        p.name = name;
        p.abbreviation = null;
        p.remark = null;
        this.partnerService.createPartner(p)
            .then(function (partner) {
            _this.partners.push(partner);
            _this.selectedPartner = null;
        });
    };
    PartnerListComponent.prototype.delete = function (partner) {
        var _this = this;
        this.partnerService
            .deletePartner(partner.id)
            .then(function () {
            _this.partners = _this.partners.filter(function (h) { return h !== partner; });
            if (_this.selectedPartner === partner) {
                _this.selectedPartner = null;
            }
        });
    };
    PartnerListComponent = __decorate([
        core_1.Component({
            selector: 'partners',
            templateUrl: 'app/mast/partner-list.component.html',
            styleUrls: ['app/mast/partner-list.component.css'],
            providers: [partner_service_1.PartnerService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, partner_service_1.PartnerService])
    ], PartnerListComponent);
    return PartnerListComponent;
}());
exports.PartnerListComponent = PartnerListComponent;
//# sourceMappingURL=partner-list.component.js.map