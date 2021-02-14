import { Component } from '@angular/core';
import { customComp, midObject, sideObject } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dashboard';
  data: Array<midObject> = [
    {
      data1: 'Earnings',
      period: '(Monthly)',
      data2: '$40000',
      color: 'primary',
      progressBar: false,
      img: 'fa-calendar',
    },
    {
      data1: 'Earnings',
      period: '(Annually)',
      data2: '$215000',
      color: 'success',
      progressBar: false,
      img: 'fa-dollar',
    },
    {
      data1: 'Tasks',
      period: '',
      data2: '50%',
      color: 'danger',
      progressBar: true,
      img: 'fa-clipboard',
    },
    {
      data1: 'Pending Requests',
      period: '',
      data2: '18',
      color: 'warning',
      progressBar: false,
      img: 'fa-comments',
    },
  ];
  data2: Array<sideObject> = [
    {
      head: 'INTERFACE',
      subhead: [
        {
          img: 'fa fa-fw fa-cog',
          data: 'Components',
          next: '',
        },
        {
          img: 'fa fa-fw fa-wrench',
          data: 'Utilties',
          next: '',
        },
      ],
    },
    {
      head: 'ADDONS',
      subhead: [
        {
          img: 'fa fa-fw fa-folder',
          data: 'Pages',
          next: '',
        },
        {
          img: 'fa fa-fw fa-chart',
          data: 'Charts',
          next: '',
        },
        {
          img: 'fa fa-fw fa-table',
          data: 'Tables',
          next: '',
        },
      ],
    },
  ];
  dataComp: Array<customComp> = [
    {
      button1: 'Button',
    },
    {
      button1: 'Cards',
    },
    {
      button1: 'Colors',
    },
    {
      button1: 'Borders',
    },
  ];

  constructor() {
    this.data.forEach((element) => {});
    this.data2.forEach((element2) => {});
    this.dataComp.forEach((elementComp) => {});
  }
}
