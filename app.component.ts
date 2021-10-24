import { Component } from '@angular/core';
// importa o arquivo com os dados
import { data } from './arquivo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-pratica';
  // permite que os dados sejam acessados pelo template
  alunos: any[] = data;
}
