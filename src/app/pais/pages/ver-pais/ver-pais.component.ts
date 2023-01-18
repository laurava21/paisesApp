import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{

  /// Country
  pais!: Country;

  /// Contructor
  // ActivatedRoute: we use this for subscribing to any change that happens
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService){}

  /// On Init method
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getCountryForAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais => {
        this.pais = pais;
      })


    // this.activatedRoute.params
    //  .subscribe(({id}) => {
    //    console.log(id)
    //    this.paisService.getCountryForAlpha(id)
    //      .subscribe(pais=>{
    //        console.log(pais)
    //      })
    //  })
  }

}
