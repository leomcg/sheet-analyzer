import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { colors, filesData } from '../mock';

@Component({
  selector: 'report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.scss']
})
export class ReportChartComponent implements OnInit {

  totalSheets = filesData.totalFiles
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
            center: ['45%', '60%'],
            size: 300
        }
      },
      series: [
        {
          data: this.getChartData(filesData.classificationResult),
          type: 'pie',
          dataLabels: {
            formatter: function (oi) {
              //console.log('datalabel: ', this)
              return this.y && this.y > 1 ? this.y + " arquivos" : '1 arquivo'
            }
          }
          
        },

     
      ]
    })
  }

  getChartData(array: any) {
    const result: any = array.map((el:any) => {
      return {
        y: el.quantity,
        name: el.classification.replace("_", " "),
        color: (colors as any)[el.classification]
      }
    })
    return result
  }
}

 


