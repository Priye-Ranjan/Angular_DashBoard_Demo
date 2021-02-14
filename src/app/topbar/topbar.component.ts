import { Component, Input, OnInit } from '@angular/core';
import { topObject } from '../model';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  @Input('topObj') topObj: Partial<topObject> = {};
  constructor() {}

  ngOnInit(): void {}
}
