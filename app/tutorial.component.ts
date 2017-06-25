import { Component } from "@angular/core";

@Component({
    selector: "my-tutorial",
    template: `
    <h2>{{title}}</h2>
    <h1 [ngClass]="{classColor:cc, classBackground: cb}">Dong doi se khien em thay doi di tat ca.</h1>
    <button (click)="clickToggle()">Tat/Bat</button>
    <p [ngStyle]="{'font-size': kichco, 'font-weight': doday}">Dong nay se bien doi dua vao ngStyle</p>
    `,
    styles: [`
        .classColor {
            color: red;
        }
        .classBackground {
            background-color: yellow;
        }
    `]
})

export class TutorialComponent {
    public title = "Huong dan hoc Angular 2 - Phan 1";

    // Attribute Directives ngClass:   [ngClass] = "{nameVar1: booleanValue1, nameVar2: booleanValue2}"
    public cc = true;
    public cb = true;
    clickToggle(){
        this.cc = !this.cc;
        this.cb = !this.cb;
    }

    // Atribute Directives ngStyle:    [ngStyle] = "{'attribute1': value1, 'attribute2': value2}"
    public kichco = "30px";
    public doday = "bold";       
}