import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {


  constructor(private _http: HttpClient) { }

  getFlights(startdate: number, endDate: number){
    return this._http.get(`https://opensky-network.org/api/flights/all?begin=${startdate}&end=${endDate}`)
  }
}
