import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ReservationResponse, ReservationCreateResponse } from '../reservations/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private baseUrl = environment.urlBase;

  constructor(private http: HttpClient) { }

  getReservations() {
    const url = `${this.baseUrl}/reservation/getReservation`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'x-access-token': token });
    return this.http.post<ReservationResponse>(url ,{}, {headers}).pipe(
      catchError(err => of(err.error.msg))
    ); 


  }
  getReservationsAll() {
    const url = `${this.baseUrl}/reservation/getReservationAll`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'x-access-token': token });
    return this.http.post<ReservationResponse>(url ,{}, {headers}).pipe(
      catchError(err => of(err.error.msg))
    ); 


  }

  createReservation(reservation: any) {
    const url = `${this.baseUrl}/reservation`;
    const token = localStorage.getItem('token');
    const body = {
      reservation
    }

    console.log(body.reservation)
    console.log(body['book']);
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'x-access-token': token });
    return this.http.post<ReservationCreateResponse>(url, JSON.stringify(body['reservation']) , {headers}).pipe(
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    ); 


  }


  returned(re: any) {
    const url = `${this.baseUrl}/reservation/returned`;
    const token = localStorage.getItem('token');
    const body = {
      re
    }

    console.log(body.re)
    console.log(body['book']);
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'x-access-token': token });
    return this.http.post<ReservationCreateResponse>(url, JSON.stringify(body['re']) , {headers}).pipe(
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    ); 


  }





}
