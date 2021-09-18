import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  ` ]
})
export class PorRegionComponent {

  regiones: Array<string> = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor() { }
  
  activarRegion( region: string ){
    this.regionActiva = region;
    //TODO: hacer el llamado al servicio
  }

}
