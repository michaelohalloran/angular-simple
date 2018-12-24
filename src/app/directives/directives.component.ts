import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  pw: string = "Tuna";
  showPw: boolean;
  clicks: number;
  time: any;
  record = [];
  applyColors : boolean;

  constructor() { }

  ngOnInit() {
    this.showPw = false;
    this.clicks = 0;
    this.applyColors = false;
  }

  //toggle Pw, increment counter and record new time, push those to record array
  toggleDetails() {
    this.showPw = !this.showPw;
    this.clicks++;
    this.time = new Date();
    this.record.push({click: this.clicks, time: this.time});
    console.log('clicks: ', this.clicks);
    console.log('time: ', this.time);
    console.log('record: ', this.record);
    //check if colors should be applied
  }

  applyColor(clickNum) {
    return this.applyColors = clickNum >= 5 ? true : false; 
  }

  applyBackground(clickNum) {
    return clickNum >=5 ? 'blue': null;
  }

}
