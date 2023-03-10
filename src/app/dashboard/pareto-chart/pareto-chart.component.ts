import { Component, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { colors } from '../../constants';
import { filesData } from '../../mock';

@Component({
  selector: 'pareto-chart',
  templateUrl: './pareto-chart.component.html',
  styleUrls: ['./pareto-chart.component.scss']
})
export class ParetoChartComponent {
    chartData = new Chart({}) 
    counter = 0
    @Input() filesData: any 
    
    getChartData(array: any) {
        return array.map((el:any) => {
            const { fileName, fileSizeFormatted, sumFormulas, sumMacros,
                sumFeaturesUsed, sumExternalRelationships,
                sumRows, sumColumns, classification, sumComplexityTotal, percentPareto, sumSheets} = el
            
          return {

            y: sumComplexityTotal,
            color: (colors as any)[classification],
            percentPareto,
            fileName,
            fileSizeFormatted,
            classification,
            sumSheets,
            sumFormulas,
            sumRows,
            sumColumns,
            sumMacros,
            sumFeaturesUsed,
            sumExternalRelationships,
          }
        })
    }
    

    getParetoData(array: any) {
        return array.map((el:any) => el.percentPareto)
    }

    ngOnInit() {
        this.renderChart()
    }
        
    renderChart() {
        const self = this
        this.chartData = new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Pareto Chart',
                style: {'font-family': 'roboto', 'text-transform': 'uppercase', fontSize: '20px', fontWeight: 'bold'}
            },
            legend: {
                enabled: false
            },
            tooltip: {
                shared: true,
                formatter: function (data: any) {
                    const array = data.chart.series[1].data.map((el: any) => {
                        const percentageArray = data.chart.series[0].data.find((item: any) => {
                             // console.log('el: ', el.percentPareto)
                             // console.log('item: ', item.y)
                             item.y == el.percentPareto
                            } )
                            // console.log('percentageArray: ', percentageArray)
                        return {...el, pareto: percentageArray?.y}
                    })
                    const fileData: any = array.find((el:any) => {
                        return el.y == (this.points as any)[1].y 
                        && el.pareto == (this.points as any)[0].percentPareto
                    });
                    
                    return `
                    <b style="color: #7CB5EC">Pareto: ${fileData?.percentPareto.toString().replace(".", ",")}%</b><br>
                    <p>File: ${fileData?.fileName}</p><br>
                    <p>Tamanho: ${fileData?.fileSizeFormatted}</p><br>
                    <p>Complexity: ${fileData?.classification.replace("_", " ")}</p><br>
                    <p>Sheets: ${fileData?.sumSheets}</p><br>
                    <p>Formulas: ${fileData?.sumFormulas}</p><br>
                    <p>Rows: ${fileData?.sumRows}</p><br>
                    <p>Columns: ${fileData?.sumColumns}</p><br>
                    <p>Macros: ${fileData?.sumMacros}</p><br>
                    <p>Features: ${fileData?.sumFeaturesUsed}</p><br>
                    
                    `
                }
            },
            xAxis: {
                labels: {
                    formatter: function (data: any): string {
                      
                        console.log(this.chart.series[1].data)
                        if(self.counter < this.chart.series[1].data.length + 1) {
                            self.counter = 0
                        }
                        console.log('array: ', this.chart.series[1].data[1])
                        return  ''
                    }
                },
                crosshair: true
            },
            yAxis: [{
                title: {
                    text: ''
                },
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
                name: '',
                type: 'column',
                zIndex: 2,
                data: this.getChartData(filesData.spreadsheetsProcessedData)
            }]
        })
    }
 }
        

    
