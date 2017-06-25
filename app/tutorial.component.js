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
        // Attribute Directives ngClass:   [ngClass] = "{nameVar1: booleanValue1, nameVar2: booleanValue2}"
        this.cc = true;
        this.cb = true;
        // Atribute Directives ngStyle:    [ngStyle] = "{'attribute1': value1, 'attribute2': value2}"
        this.kichco = "30px";
        this.doday = "bold";
    }
    TutorialComponent.prototype.clickToggle = function () {
        this.cc = !this.cc;
        this.cb = !this.cb;
    };
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    core_1.Component({
        selector: "my-tutorial",
        template: "\n    <h2>{{title}}</h2>\n    <h1 [ngClass]=\"{classColor:cc, classBackground: cb}\">Dong doi se khien em thay doi di tat ca.</h1>\n    <button (click)=\"clickToggle()\">Tat/Bat</button>\n    <p [ngStyle]=\"{'font-size': kichco, 'font-weight': doday}\">Dong nay se bien doi dua vao ngStyle</p>\n    ",
        styles: ["\n        .classColor {\n            color: red;\n        }\n        .classBackground {\n            background-color: yellow;\n        }\n    "]
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map