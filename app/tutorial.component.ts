import { Component } from "@angular/core";

@Component({
    selector: "my-tutorial",
    template: `
    <h2>{{title}}</h2>
    <h3 *ngIf="showOrNot">Dong nay se duoc hien thi len neu gia tri showOrNot = true va nguoc lai. Day la Structural Directive co ten la "*ngIf" </h3>
    <div [ngSwitch]="display">
        <p *ngSwitchCase="'Line1'">Line 1 da len song</p>
        <p *ngSwitchCase="'Line2'">Line 2 da len song</p>
        <p *ngSwitchCase="'Line3'">Line 3 da len song</p>
        <p *ngSwitchDefault>Line Default da len song</p>
    </div>
    <ul>
        <li *ngFor="let x of colors">{{x}}</li>
    </ul>
    `
})

export class TutorialComponent {
    public title = "Huong dan hoc Angular 2 - Phan 1";
    // structural directive *ngIf = "booleanValue"
    public showOrNot = true;

    // structural directive [ngSwitch] = "caseValue"
    public display = "Line1";

    // structural directive *ngFor = "let x of nameVar"
    public colors: string[] = ["xanh","do","tim","vang"];
}