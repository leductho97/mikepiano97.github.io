"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.title = "Huong dan hoc Angular 2 - Phan 1";
        // structural directive *ngIf = "booleanValue"
        this.showOrNot = true;
        // structural directive [ngSwitch] = "caseValue"
        this.display = "Line1";
        // structural directive *ngFor = "let x of nameVar"
        this.colors = ["xanh", "do", "tim", "vang"];
    }
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    core_1.Component({
        selector: "my-tutorial",
        template: "\n    <h2>{{title}}</h2>\n    <h3 *ngIf=\"showOrNot\">Dong nay se duoc hien thi len neu gia tri showOrNot = true va nguoc lai. Day la Structural Directive co ten la \"*ngIf\" </h3>\n    <div [ngSwitch]=\"display\">\n        <p *ngSwitchCase=\"'Line1'\">Line 1 da len song</p>\n        <p *ngSwitchCase=\"'Line2'\">Line 2 da len song</p>\n        <p *ngSwitchCase=\"'Line3'\">Line 3 da len song</p>\n        <p *ngSwitchDefault>Line Default da len song</p>\n    </div>\n    <ul>\n        <li *ngFor=\"let x of colors\">{{x}}</li>\n    </ul>\n    "
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map