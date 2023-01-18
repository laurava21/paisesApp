import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

/**
 * Pais Input Component
 */
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  /// On Enter event
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  /// On debounce event
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  /// Debounce - observable
  debouncer: Subject<string> = new Subject();

  /// Placeholder
  @Input() placeholder: string = '';

  /// Name of country
  termino: string = '';

  /// OnInit method: se dispara solo una vez cuando el componente es creado
  ngOnInit(){
    /// me subscribo a los eventos del debounce
    this.debouncer
    .pipe(
      /// el pipe permite tratar los datos
      debounceTime(300)
    )
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    });
  }

  /// Method for search the country
  buscar() {
    this.onEnter.emit(this.termino);

  }

  /// Tecla presionaca method
  teclaPresionada(){
    
    /// llamar el debouncer y mandar el siguiente valor
    this.debouncer.next( this.termino);
  }

}
