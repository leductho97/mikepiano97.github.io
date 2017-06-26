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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tutorial_component_1 = require("./tutorial.component");
var AppComponent = (function () {
    function AppComponent() {
        // interpolation binding
        this.title = "Xin chao den voi hanh trinh kham pha Angular 2";
        // khai bao bien agree va disagree de no dem so luot dong y va khong dong y
        this.agree = 0;
        this.disagree = 0;
        // khai bao mot danh sach ten nguoi, de dung vong lap ngFor, liet ke ra cho ho vote
        this.danhsach = ["Mr. A", "Mr. B", "Mr. C", "Mr. D", "Mr. E"];
    }
    // bat su kien nay dem moi khi bien argee truyen vao la dung hay sai
    AppComponent.prototype.parentVote = function (agree) {
        if (agree)
            this.agree++;
        else
            this.disagree++;
    };
    AppComponent.prototype.changeName = function (gido) {
        this.gido.setName("Le Duc Tho da thay doi thong tin nay tu parrent component");
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(tutorial_component_1.TutorialComponent),
    __metadata("design:type", tutorial_component_1.TutorialComponent)
], AppComponent.prototype, "gido", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <input type=\"text\" #textName (keyup)=\"0\">\n  <p>So luong Agree: {{agree}}</p>\n  <p>So luong Disagree: {{disagree}}</p>\n  <button (click)=\"changeName()\">Bam vao day de doi ten</button>\n  <my-tutorial *ngFor=\"let person of danhsach\" [name]=\"person\" (onVote)=\"parentVote($event)\"></my-tutorial>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map