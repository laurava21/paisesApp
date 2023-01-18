import { Component, EventEmitter, Output } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

/**
 * Por capital page
 */
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  /// Name of capital
  termino: string = '';

  /// Hay error 
  hayError: boolean = false;

  /// Paises
  paises: Country[] = [];

  /// Constructor
  constructor(private paisService: PaisService){}

  /// Buscar method
  buscar(termino: string){
    
    /// Re-init
    this.hayError = false;
    this.termino = termino;

    // Search at service
    this.paisService.buscarPorCapital(termino)
      .subscribe( (paises) =>{
        console.log(paises);
        this.paises = paises;
      }, (error) =>{
        this.hayError = true;
        this.paises = [];
      });
  }


  /// sugerencias
  sugerencias(valor: string){
    // TODO : crear sugerencias
    console.log('Holi');
  }
}
