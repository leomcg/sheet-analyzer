import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { colors, filesData } from '../mock';

@Component({
  selector: 'pareto-chart',
  templateUrl: './pareto-chart.component.html',
  styleUrls: ['./pareto-chart.component.scss']
})
export class ParetoChartComponent {
    chartData = new Chart({}) 
    
    getChartData(array: any) {
        return array.map((el:any) => {
            const { fileName, fileSizeFormatted, sumFormulas, sumMacros,
                sumFeaturesUsed, sumExternalRelationships,
                sumRows, sumColumns, classification, sumComplexityTotal, percentPareto, sumSheets} = el
            console.log
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
                text: 'Gráfico de Pareto'
            },
            tooltip: {
                shared: true,
                formatter: function (data: any) {
                    const array = data.chart.series[1].data.map((el: any) => {
                        const percentageArray = data.chart.series[0].data.find((item: any) => {
                             console.log('el: ', el.percentPareto)
                             console.log('item: ', item.y)
                             item.y == el.percentPareto
                            } )
                            console.log('percentageArray: ', percentageArray)
                        return {...el, pareto: percentageArray?.y}
                    })
                    const fileData: any = array.find((el:any) => {
                        return el.y == (this.points as any)[1].y 
                        // &&
                        // el.pareto == (this.points as any)[0].y 
                    });
                    
                    console.log('array: ', array)
                    // console.log('fileData: ', fileData)
                    // console.log('this: ', (this.points as any[1]))
                    // console.log('data: ', data)
                    
                    return `
                    <b style="color: #7CB5EC">Pareto: ${fileData?.percentPareto.toString().replace(".", ",")}%</b><br>
                    <p>Arquivo: <span class="text-lowercase">${fileData?.fileName}</span</p><br>
                    <p>Tamanho: ${fileData?.fileSizeFormatted}</p><br>
                    <p>Complexidade: ${fileData?.classification.replace("_", " ")}</p><br>
                    <p>Sheets: ${fileData?.sumSheets}</p><br>
                    <p>Fórmulas: ${fileData?.sumFormulas}</p><br>
                    <p>Linhas: ${fileData?.sumRows}</p><br>
                    <p>Colunas: ${fileData?.sumColumns}</p><br>
                    <p>Macros: ${fileData?.sumMacros}</p><br>
                    <p>Features: ${fileData?.sumFeaturesUsed}</p><br>
                    
                    `
                }
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
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
                name: '',
                type: 'column',
                zIndex: 2,
                data: this.getChartData(filesData.spreadsheetsProcessedData)
            }]
        })
    }
 }
        

    
