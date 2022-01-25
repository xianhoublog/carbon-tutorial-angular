import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() heading: any;
  @Input() content: any;
  splitHeading: Array<string>;

  constructor() {
    this.splitHeading = new Array()
   }

  ngOnInit(): void {
     // create the split title to get bold styles
     this.splitHeading = this.createArrayFromPhrase(this.heading);
  }

   // Take in a phrase and separate the third word in an array
   createArrayFromPhrase(phrase:any) {
    const splitPhrase = phrase.split(" ");
    const thirdWord = splitPhrase.pop();
    return [splitPhrase.join(" "), thirdWord];
  }

}
