import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { filesData } from './mock';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportChartComponent } from './dashboard/report-chart/report-chart.component';
import { FilePickerComponent } from './dashboard/file-picker/file-picker.component';
import { ParetoChartComponent } from './dashboard/pareto-chart/pareto-chart.component';
import { ReportBadgeComponent } from './dashboard/cards/report-badge/report-badge.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportChartComponent,
    FilePickerComponent,
    ReportBadgeComponent,
    ParetoChartComponent,
    HeaderComponent,
    DashboardComponent,
    CardsComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'config', component: ConfigComponent},
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  filesData = filesData
 }
