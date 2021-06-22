import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css'],
})
export class GaleriaComponentComponent {
  @Input() titulo: string = '';
  @Input() fotos: string[] = [];
  fotoAtual: number = 0;

  avancaFoto(n: number) {
    this.fotoAtual += n;
  }

  vaiParaFoto(foto: number) {
    this.fotoAtual = foto;
  }

  get primeira() {
    return 0;
  }

  get ultima() {
    return this.fotos.length - 1;
  }
}
