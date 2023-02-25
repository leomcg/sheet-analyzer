import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [
    {
      title: "Tempo total de processamento",
      fileName: '',
      value: 42,
      class: "background-blue",
      type: 'time'
    },
    {
      title: "Arquivo mais pesado",
      fileName: 'teste.xml',
      value: 23000,
      class: "background-red",
      type: 'kb'
    },
    {
      title: "Arquivo menos complexo",
      fileName: '123oliveira4.xml',
      value: 'Pouco Complexo',
      class: "background-green",
      type: 'text'
    },
    {
      title: "Total de arquivos processados",
      value: 67,
      class: "background-orange",
    },
  ]
}
