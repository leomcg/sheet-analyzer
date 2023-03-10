import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  activeTab = localStorage.getItem('selectedTab')  || 'dashboard'
  tabs = ['dashboard', 'history', 'config']

  onClickTab(tab: string) {
    this.activeTab = tab
    localStorage.setItem('selectedTab', tab) 
    console.log('activeTab: ', this.activeTab)
  }

}
