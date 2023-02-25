import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { ReportChartComponent } from './report-chart/report-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
