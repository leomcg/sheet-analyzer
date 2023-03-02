import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { colors, filesData } from '../mock';

@Component({
  selector: 'pareto-chart',
  templateUrl: './pareto-chart.component.html',
  styleUrls: ['./pareto-chart.component.scss']
})
export class ParetoChartComponent {
    chartData = new Chart({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Gráfico de Pareto'
        },
        tooltip: {
            shared: true
        },
        xAxis: {
            // categories: [
            //     'EXTRA HIGH',
            //     'HIGH',
            //     'MEDIUM',
            //     'LOW',
            //     'EXTRA LOW',
            // ],
            crosshair: true
        },
        yAxis: [{
            title: {
                text: ''
            }
        }, {
            title: {
                text: ''
            },
            minPadding: 0,
            maxPadding: 0,
            max: 100,
            min: 0,
            opposite: true,
            labels: {
                format: '{value}%'
            }
        }],
        series: [{
            name: 'Pareto',
            type: 'line',
            data: this.getParetoData(filesData.spreadsheetsProcessedData),
            yAxis: 1,
            zIndex: 10,
            tooltip: {
                valueDecimals: 2,
                valueSuffix: '%'
            }
        }, {
            name: 'Arquivos',
            type: 'column',
            zIndex: 2,
            data: this.getChartData(filesData.spreadsheetsProcessedData)
        }]
    }) 
    getChartData(array: any) {
        return array.map((el:any) => {
          return {
            y: el.sumComplexityTotal,
            color: (colors as any)[el.classification]
          }
        })
      }
    

    getParetoData(array: any) {
        return array.map((el:any) => el.percentPareto)
    }
}

    
