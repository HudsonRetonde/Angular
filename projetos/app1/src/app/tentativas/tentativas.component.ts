import { Component } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent {
  public coracaoVazio: string = 'assets/coracaoVazio.png'
  public coracaoCheio: string = 'assets/coracaoCheio.png'
}
