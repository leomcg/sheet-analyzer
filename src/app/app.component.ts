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
      fileName: '',
      value: 12,
      color: "grey",
    },
    {
      title: "Tempo total de processamento",
      fileName: '',
      value: '30seg',
      color: "blue",
    },
    {
      title: "Arquivo mais pesado",
      fileName: 'testeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2.xml',
      value: '10MB',
      color: "red",
    },
    {
      title: "Arquivo menos complexo",
      fileName: '123oliveira4.xml',
      value: 'LOW',
      color: "green",
    },
    {
      title: "Total de arquivos processados",
      value: 67,
      color: "orange",
    },
  ]
}
