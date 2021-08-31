import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.urlBase;
  private _usuario!: User;

   isLogin = new BehaviorSubject(false);
   isLibrarian = new BehaviorSubject(false);

  get usuario() {
    return { ...this._usuario };
  }


  constructor(private http: HttpClient) { }

  register(data:any) {
    const url = `${this.baseUrl}/auth/signup`;
    const body = {
      data
    }

    return this.http.post<AuthResponse>(url, body['data']).pipe(
      tap(resp => {
        if (resp.ok) {
       
          localStorage.setItem('token', resp.token!);
        }
      }),
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    );


  }


  login(email: string, password: string) {

    const url = `${this.baseUrl}/auth/signin`;
    const body = {
      email, password
    }

    return this.http.post<AuthResponse>(url, body).pipe(
      tap(resp => {
        console.log(resp);
        if (resp.ok) {
          localStorage.setItem('roles', resp.roles!);
         
          localStorage.setItem('token', resp.token!);
          localStorage.setItem('isLogin', resp.ok.toString()!);
        }
      }),
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    );

  }

  validarToken(): Observable<boolean> {

    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map(resp => {
        console.log(resp.token);
        localStorage.setItem('token', resp.token!);
        this._usuario = {
          name: resp.name!,
          email: resp.email!,
          userId: resp.userId!
        }
        return resp.ok!;
      }),
      catchError(err => of(false))
    );
  }

  validarRole(): Observable<boolean> {

    const role =  localStorage.getItem('roles');

    if(role == 'student') {
      this.isLibrarian.next(false);
      return of(true);

    }else {
      return of(false);
    }
  }

  validarLibrarian(): Observable<boolean> {

    const role =  localStorage.getItem('roles');

    if(role == 'librarian') {
      this.isLibrarian.next(true);
      return of(true);

    }else {
      return of(false);
    }
  }

  logout() {
    //localStorage.removeItem('token');
    localStorage.clear();
  }
}
