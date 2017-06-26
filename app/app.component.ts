import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from "./tutorial.component";
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <input type="text" #textName (keyup)="0">
  <p>So luong Agree: {{agree}}</p>
  <p>So luong Disagree: {{disagree}}</p>
  <button (click)="changeName()">Bam vao day de doi ten</button>
  <my-tutorial *ngFor="let person of danhsach" [name]="person" (onVote)="parentVote($event)"></my-tutorial>
  `
})
export class AppComponent {
    // interpolation binding
    public title = "Xin chao den voi hanh trinh kham pha Angular 2";

    // khai bao bien agree va disagree de no dem so luot dong y va khong dong y
    public agree:number = 0;
    public disagree:number = 0;

    // bat su kien nay dem moi khi bien argee truyen vao la dung hay sai
    parentVote(agree:boolean){
      if (agree) this.agree++
      else this.disagree++
    }

    // khai bao mot danh sach ten nguoi, de dung vong lap ngFor, liet ke ra cho ho vote
    public danhsach: string[] = ["Mr. A","Mr. B","Mr. C","Mr. D","Mr. E"];

    // set viewchild decorator
    @ViewChild(TutorialComponent)
    private gido:TutorialComponent;

    changeName(gido){
      this.gido.setName("Le Duc Tho da thay doi thong tin nay tu parrent component");
    }
 }