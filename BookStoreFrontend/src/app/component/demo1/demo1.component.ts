import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {
fruit:any;
  constructor() { }

  ngOnInit(): void {
  }
  fruits: Array<string> = ['apple', 'banana', 'orange']
}
