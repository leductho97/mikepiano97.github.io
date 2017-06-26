import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "my-tutorial",
    template: `
    <h2>{{title}}</h2>
    <p>Ho va ten: {{name}}</p>

    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">Disagree</button>
    <br><br>
    Da vote chua? {{voted}}
    `
})

export class TutorialComponent {
      @Input() name: string;
      @Output() onVote = new EventEmitter<boolean>();

      // khai bao bien voted = fasle, nghia la chua vote
      public voted: boolean = false;

      // sau khi click, su kien vote se tra ve ket qua, thay doi bien vote thanh true, bat ke dung hay sai.
      vote(agree:boolean){
          this.voted = true;
          this.onVote.emit(agree);
      };
      setName(name:string) {
          this.name = name;
      }
}