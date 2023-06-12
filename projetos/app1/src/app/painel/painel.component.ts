import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import {FRASES } from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  constructor(){
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.frases)
  }

  public atualizaResposta(resposta: Event):void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }
  public verificarResposta():void{
  if(this.rodadaFrase.frasePtBr == this.resposta){
    alert('A tradução está correta!!')
  } else {
    alert('A tradução está equivocada.')
  }

    // trocar pergunta da rodada
    this.rodada++
    console.log(this.rodada)
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }
}
