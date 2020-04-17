import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('title') Title: string;
  @Input('info') Info: string;
  @Input('icon') Icon: string;
  @Input('color') Color: string;
  constructor() { }

  ngOnInit() {
  }

}
