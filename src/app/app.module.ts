import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { FilePickerComponent } from './file-picker/file-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportChartComponent,
    FilePickerComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
