import { Component, Input, OnInit } from '@angular/core';
import { customComp } from '../model';
@Component({
  selector: 'app-customcomponents',
  templateUrl: './customcomponents.component.html',
  styleUrls: ['./customcomponents.component.css'],
})
export class CustomcomponentsComponent implements OnInit {
  @Input('comp') comp: Partial<customComp> = {};
  constructor() {}

  ngOnInit(): void {}
}
