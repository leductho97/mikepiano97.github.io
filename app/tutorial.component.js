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
    }
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    core_1.Component({
        selector: "my-tutorial",
        template: "\n    <h3>{{title}}</h3>\n    First Name: <input type=\"text\" [(ngModel)]=\"firstname\"/> <br>\n    Last Name: <input type=\"text\" [(ngModel)]=\"lastname\"/> <br>\n    So your Full Name is: {{firstname}} {{lastname}} <br>\n    "
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map