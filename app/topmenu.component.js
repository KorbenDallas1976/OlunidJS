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
//import { Router } from '@angular/router-deprecated';
var TopmenuComponent = (function () {
    function TopmenuComponent() {
        this.title = 'Top Menu';
    }
    TopmenuComponent.prototype.gotoAbout = function () {
        var link = ['About'];
        //this.router.navigate(link);
    };
    TopmenuComponent.prototype.gotoHome = function () {
        var link = ['Home'];
        //this.router.navigate(link);
    };
    TopmenuComponent.prototype.gotoHelp = function () {
        var link = ['Help'];
        //this.router.navigate(link);
    };
    TopmenuComponent.prototype.gotoCustomerOrders = function () {
        var link = ['CustomerOrders'];
        //this.router.navigate(link);
    };
    TopmenuComponent.prototype.gotoCustomers = function () {
        var link = ['Customers'];
        //this.router.navigate(link);
    };
    TopmenuComponent.prototype.gotoCustomersPaginated = function () {
        var link = ['CustomersPaginated'];
        //this.router.navigate(link);
    };
    TopmenuComponent.prototype.gotoTest1 = function () {
        var link = ['Test1'];
        //this.router.navigate(link);
    };
    TopmenuComponent = __decorate([
        core_1.Component({
            selector: 'top-menu',
            templateUrl: 'app/topmenu.component.html',
            styleUrls: ['app/topmenu.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TopmenuComponent);
    return TopmenuComponent;
}());
exports.TopmenuComponent = TopmenuComponent;
//# sourceMappingURL=topmenu.component.js.map