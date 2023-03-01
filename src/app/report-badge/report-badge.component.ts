import { Component, Input } from '@angular/core';

@Component({
  selector: 'report-badge',
  templateUrl: './report-badge.component.html',
  styleUrls: ['./report-badge.component.scss']
})
export class ReportBadgeComponent {
  @Input() cardData: any = {}
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    
    // console.log('this.cardData: ', this.cardData)
    // console.log('changes: ', changes)
  }

}
