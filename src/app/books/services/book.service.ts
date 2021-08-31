import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book, CreateBookResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }

  private baseUrl = environment.urlBase;

  getBooks() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'x-access-token': token });

    const url = `${this.baseUrl}/book` 

    return this.http.get<Book[]>(url, {headers});

  }

  getBookPorId(id: String): Observable<Book> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'x-access-token': token });

    const url = `${this.baseUrl}/book/${id}`;

    return this.http.get<Book>(url, {headers});

  }

  createBook(book: any) {
    const url = `${this.baseUrl}/book`;
    const token = localStorage.getItem('token');
    const body = {
      book
    }
    console.log(body['book']);
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'x-access-token': token });
    return this.http.post<CreateBookResponse>(url, JSON.stringify(body['book']) , {headers}).pipe(
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    ); 


  }

}
