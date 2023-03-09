import { Component, Input } from '@angular/core';

@Component({
  selector: 'report-badge',
  templateUrl: './report-badge.component.html',
  styleUrls: ['./report-badge.component.scss']
})
export class ReportBadgeComponent {
  @Input() cardData: any = {}
  icon1: string = '';
  icon2: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    if(this.cardData) {
      this.formatIconString1()
      this.formatIconString2()
    }
  }

  
  formatIconString1() {
    this.icon1 =  `../../assets/icons/${this.cardData.icon.icon1}.png` || ''
    console.log('icon1: ', )
  }

  formatIconString2() {
    this.icon2 = `../../assets/icons/${this.cardData.icon.icon2}.png` || ' '
  }
}
