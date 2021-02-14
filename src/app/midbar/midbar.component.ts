import { Component, Input, OnInit } from '@angular/core';
import { midObject } from '../model';

@Component({
  selector: 'app-midbar',
  templateUrl: './midbar.component.html',
  styleUrls: ['./midbar.component.css'],
})
export class MidbarComponent implements OnInit {
  @Input('midObj') midObj: Partial<midObject> = {};
  constructor() {}

  ngOnInit(): void {}
}
