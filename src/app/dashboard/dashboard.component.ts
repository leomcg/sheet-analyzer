import { Component } from '@angular/core';
import { filesData } from '../mock';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  filesData = filesData

  downloadExcelReport() {
    // TO DO
  }
}
