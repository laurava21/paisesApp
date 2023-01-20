import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

/**
 * Por region component
 */
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent{


  /// Regions of the world
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];

  /// Active region
  regionActiva: string = '';

  /// Paises array
  paises: Country[] = [];

  /// Constructor
  constructor(private paisService: PaisService) { }

  // Get CSS class
  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  /// Active region method
  activarRegion(region: string) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPorRegion(region)
      .subscribe(paises => this.paises = paises);

  }

}
