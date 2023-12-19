import { Component } from '@angular/core';
import { TesteService } from './services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private testeService: TesteService) {}

  postBackend() {
    console.log(1)
    this.testeService.postBackend();
  }
}
