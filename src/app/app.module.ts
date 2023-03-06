import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { ReportBadgeComponent } from './report-badge/report-badge.component';
import { filesData } from './mock';
import { ParetoChartComponent } from './pareto-chart/pareto-chart.component';
import pareto from 'highcharts/modules/pareto';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportChartComponent,
    FilePickerComponent,
    ReportBadgeComponent,
    ParetoChartComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [{ provide: pareto, useValue: pareto }],
  bootstrap: [AppComponent]
})
export class AppModule {
  filesData = filesData
 }
