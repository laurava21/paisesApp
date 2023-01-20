import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/pais-interface';

/**
 * Pais Service
 */
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  /**
   * Base url for API request
   */
  private apiUrl: string = 'https://restcountries.com/v2'

  /// Get params
  get httpParams(){
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population');
  }

  /**
   * Constructor
   */
  constructor(private http: HttpClient) { }

  /**
  * Method for search the country
  * @param termino is the name of the country
  */
  buscarPais(termino: string): Observable<Country[]> {

    // Create the url for api request
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});

  }

  /// Search countries by capital
  buscarPorCapital(capital: string): Observable<Country[]> {

    // Create the url for api request
    const url = `${this.apiUrl}/capital/${capital}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  /// Get country for alpha 2
  getCountryForAlpha(id: string): Observable<Country> {

    // Create the url for api request
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  /// Search countries by region
  buscarPorRegion(region: string): Observable<Country[]> {


    // Create url for api request
    const url = `${this.apiUrl}/regionalbloc/${region}`;

    return this.http.get<Country[]>(url, {params: this.httpParams})
            .pipe(
              tap(console.log)
            );
  }
}
