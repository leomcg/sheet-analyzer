import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.scss']
})
export class ReportChartComponent implements OnInit {

  totalSheets = 142
  self = this
  chartData = new Chart()

  ngOnInit(): void {
    const self = this
    this.chartData = new Chart({
      chart: {
        type: 'pie'
    },
      title: {
        text: ''
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
        enabled: true,
        padding: 6,
        formatter: function (oi) {
          // console.log('this', this)
          return this.key + ': '+ this.percentage.toFixed(2).replace('.', ',') + ' %'
        }
      },
      plotOptions: {
        pie: {
            innerSize: '45%',
            center: ['60%', '50%']
        }
      },
      series: [
        {
          data: [
            {
              y: 61,
              name: 'EXTRA HIGH',
              color: 'red',
            },
            {
              y: 9,
              name: 'HIGH',
              color: 'orangered',
            },
            {
              y: 18,
              name: 'MEDIUM',
              color: 'gold',
            },
            {
              y: 24,
              name: 'EXTRA LOW',
              color: 'lime',
            },
            {
              y: 30,
              name: 'LOW',
              color: 'green',
            },
          ],
          type: 'pie',
          dataLabels: {
            formatter: function (oi) {
              // console.log('datalabel: ', oi, this.x, this.y)
              return this.y + " arquivos"
            }
          }
          
        },
        // {
        //   name: 'HIGH',
          
        //   data: [{y:10}],
        //   type: 'pie',
        //   color: 'orangered'
        // },
        // {
        //   name: 'MEDIUM',
          
        //   data: [{y:10}],
        //   type: 'pie',
        //   color: 'gold'
        // },
        // {
        //   name: 'LOW',
          
        //   data: [{y:10}],
        //   type: 'pie',
        //   color: 'green'
        // },
        // {
        //   name: 'EXTRA LOW',
          
        //   data: [{y:10}],
        //   type: 'pie',
        //   color: 'lime'
        // },
     
      ]
    })
  }
}
 


