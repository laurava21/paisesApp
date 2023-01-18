import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
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
     * Constructor
     */
    constructor( private paisService: PaisService){}

    /**
     * Method for searching the country
     */
    buscar(termino: string): void{
      // Re-Initilized hayError to false
      this.hayError = false;
      this.termino = termino;

      this.paisService.buscarPais(this.termino)
      .subscribe((paises)=> {
        console.log(paises);
        this.paises = paises;
      },
        (error) => {
          this.hayError = true;
          this.paises = [];
        })
    }

    /// Sugerencias
    sugerencias(termino: string){
      //TODO: crear sugerencias
    }
}
