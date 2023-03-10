import { Component, Input } from '@angular/core';
import { icons } from '../../constants';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() filesData: any = {}
  cards = []
  showAllCards = false
 
  ngOnChanges() {
    if(this.filesData)
      this.processCards(this.filesData)
  }


  processCards(filesData:any ) {
    this.cards = this.filesData.cards.map((el: any) => {
      return {...el, icon: (icons as any)[el.title]}
    })
    console.log('cards: ', this.cards)
  }

  onShowAllCards() {
    this.showAllCards = !this.showAllCards
  }
}
