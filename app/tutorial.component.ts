import { Component } from "@angular/core";

@Component({
    selector: "my-tutorial",
    template: `
    <h3>{{title}}</h3>
    First Name: <input type="text" [(ngModel)]="firstname"/> <br>
    Last Name: <input type="text" [(ngModel)]="lastname"/> <br>
    So your Full Name is: {{firstname}} {{lastname}} <br>
    `
})

export class TutorialComponent {
    public title = "Huong dan hoc Angular 2 - Phan 1";
}