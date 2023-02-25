import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.scss']
})
export class ReportChartComponent implements OnInit {

  totalSheets = 300
  self = this
  chartData = new Chart()

  ngOnInit(): void {
    const self = this
    this.chartData = new Chart({
      title: {
        text: 'Gráfico de Pareto'
      },
      yAxis :{
        min:0,
        max:100,
        labels: {
          formatter: function (data) {
              return data.value + ' %'
          }
        },
        title: {
          text: "Porcentagens"
        }
      },
      tooltip: {
        formatter: function(data) {
          if(this.y) {
            return `Quantidade: ${this.y} | Porcentagem: ${(this.y / self.totalSheets * 100)}% `
          }
          return ''
        }
      },
      series: [
        {
          name: 'POUCA COMPLEXIDADE',
          type: 'column',
          data: [20]
        },
        {
          name: 'MÉDIA COMPLEXIDADE',
          type: 'column',
          data: [50]
        },
        {
          name: 'POUCA COMPLEXIDADE',
          type: 'column',
          data: [30]
        }
      ]
    })
  }
}
 


