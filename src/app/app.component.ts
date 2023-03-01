import { Component } from '@angular/core';
import { filesData } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filesData = filesData
}
