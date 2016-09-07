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
var Test1Component = (function () {
    function Test1Component() {
        this.title = 'Event teszt';
        this.textData = 'Bubu\n';
        this.inputText = '';
    }
    Test1Component.prototype.clickButton = function () {
        this.textData = this.textData + this.inputText + '\n';
        this.inputText = '';
    };
    ;
    Test1Component = __decorate([
        core_1.Component({
            selector: 'olu-test1',
            templateUrl: 'app/test/test1.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], Test1Component);
    return Test1Component;
}());
exports.Test1Component = Test1Component;
//# sourceMappingURL=test1.component.js.map