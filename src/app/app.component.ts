import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [
    {
      title: "Total de arquivos processados",
      fileName: 'teste.xml',
      value: 42,
      class: "background-grey",
      type: 'time'
    },
    {
      title: "Tempo total de processamento",
      fileName: 'testeeeeeeeeeeeeeeeeeeeeeeeeee.xml',
      value: '30seg',
      class: "background-blue",
      type: 'time'
    },
    {
      title: "Arquivo mais pesado",
      fileName: 'teste2.xml',
      value: '10MB',
      class: "background-red",
      type: 'kb'
    },
    {
      title: "Arquivo menos complexo",
      fileName: '123oliveira4.xml',
      value: 'LOW',
      class: "background-green",
      type: 'text'
    },
    {
      title: "Total de arquivos processados",
      value: 67,
      class: "background-orange",
      fileName: 'teste3.xml',
    },
  ]
}
