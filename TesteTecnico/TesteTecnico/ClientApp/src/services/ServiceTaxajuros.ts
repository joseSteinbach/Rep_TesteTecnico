import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, switchMap, take, tap } from 'rxjs/operators';
import { ClasseRetorno } from '../models/ClasseRetorno';


@Injectable({
  providedIn: 'root'
})

export class ServiceTaxajuros {

  private usuarioAutenticado: boolean = false;
  baseURL = `https://localhost:44358/api/CalcularJuros`;
  baseURL2 = `https://localhost:44359/api/CalcularJuros`;


  constructor(private router: Router,
    protected http: HttpClient
  ) { }

  ByBuscaTaxajurosFixo(valorParametro: number): Observable<number> {

    return this.http.get<number>(`${this.baseURL}/taxaJuros/${valorParametro.toString()}`);
  }


  //ByBuscaTaxajuros(valorParametro: number): Observable<number> {

  //  return this.http.get<number>(`${this.baseURL}/taxaJuros/${valorParametro.toString() + "&133"}`);
  //}

  ByBuscaTaxajurosFixo2(valorInicial: number, valorJuros: number, ValorTempo: number): Observable<number> {

    let params = new HttpParams();
    params = params.append("ValorInicial", valorInicial.toString());
    params = params.append("ValorJuros", valorJuros.toString());
    params = params.append("ValorTempo", ValorTempo.toString());

    return this.http.get<number>(`${this.baseURL2}/calculajuros/${params.toString()}`);
  }


}
