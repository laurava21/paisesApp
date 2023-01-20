import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';


/**
 * Por pais component
 */
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `li{
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent {

  /**
   * Name of country to search
   */
  termino: string = '';

  /**
   * There is an error var
   */
  hayError: boolean = false;

  /**
   * Paises
   */
  paises: Country[] = [];

  /**
   * Paises sugeridos
   */
  paisesSugeridos: Country[] = [];

  /**
   * Mostrar sugerencias
   */
  mostrarSugerencias: boolean = false;

  /**
   * Constructor
   */
  constructor(private paisService: PaisService) { }

  /**
   * Method for searching the country
   */
  buscar(termino: string): void {
    // Re-Initilized hayError to false
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      },
        (error) => {
          this.hayError = true;
          this.paises = [];
        })
  }

  /// Sugerencias
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe( paises => {
        this.paisesSugeridos = paises.splice(0,5);
      }, error=>{
        this.paisesSugeridos = [];
      });
  }
 
  buscarSugerido( termino: string){
    this.buscar(termino);
  }
}
