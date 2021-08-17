import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private pais$: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.pais$.buscarCapital(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

}
