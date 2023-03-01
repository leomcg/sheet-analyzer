import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

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
        categories: [
            'VERY HIGH',
            'HIGH',
            'MEDIUM',
            'LOW',
            'VERY LOW',
        ],
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
        data: [70, 81, 87, 92, 100],
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
        data: [
            {y: 65, color: 'red'},
            {y: 55, color: 'orangered'},
            {y: 35, color: 'gold'},
            {y: 34, color: 'green'},
            {y: 26, color: 'lime'},
        ]
    }]
}) 
}