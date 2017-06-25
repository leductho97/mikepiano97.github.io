import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <my-tutorial></my-tutorial>
  `
})
export class AppComponent {
    // interpolation binding
    public title = "Xin chao den voi hanh trinh kham pha Angular 2";
 }