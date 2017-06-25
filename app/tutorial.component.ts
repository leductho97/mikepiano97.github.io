import { Component } from "@angular/core";

@Component({
    selector: "my-tutorial",
    template: `
    <h3>{{title}}</h3>
    <button (click)="hamClick(name.value)">Click me</button>
    <input type="text" #name>
    `
})

export class TutorialComponent {
    public title = "Huong dan hoc Angular 2 - Phan 1";
    hamClick(value){
        console.log("Gia tri trong o la: " + value);
    }
}