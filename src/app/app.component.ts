import { Component, OnInit } from '@angular/core';
import { filesData } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  filesData = filesData
  cards: any = []

  ngAfterViewInit() {
    this.sortCards(filesData.cards)
  }

  sortCards(array: any) {
    array.forEach((el: any) => {
      //console.log('el: ', el)
      if(el.color == 'red') {
        this.cards.push(el)
      }
      if(el.color == 'orange') {
        this.cards.push(el)
      }
      if(el.color == 'green') {
        this.cards.push(el)
      }
      if(el.color == 'blue') {
        this.cards.push(el)
      }
      if(el.color == 'grey') {
        this.cards.push(el)
      }
    });
  }
}
