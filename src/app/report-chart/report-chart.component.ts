import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.scss']
})
export class ReportChartComponent {
  chartData = new Chart({
    title: {
      text: 'OI'
    },
    yAxis :{
      min:0,
      max:100
    },
    series: [
      {
        name: 'POUCA COMPLEXIDADE',
        type: 'column',
        data: [30]
      },
      {
        name: 'MÉDIA COMPLEXIDADE',
        type: 'column',
        data: [40]
      },
      {
        name: 'POUCA COMPLEXIDADE',
        type: 'column',
        data: [30]
      }
    ]
  })
}
