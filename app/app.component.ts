import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Xin chao {{title}}</h1>
  <img [src]="image">
  <br>
  <input type="text" [value]="welcomeText">
  <my-tutorial></my-tutorial>
  `
})
export class AppComponent {
    // interpolation binding
    public title = "cac Beginners cua Angular2";

    // property binding
    public image = "http://lorempixel.com/300/300/";
    public welcomeText = "Le Duc Tho";
 }