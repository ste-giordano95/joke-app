import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { SaveJoke } from '../models/ISaveJoke';

@Injectable({
  providedIn: 'root'
})
export class GetJokeService {
  private URL: string = 'https://v2.jokeapi.dev/joke/Any';

  constructor(private http: HttpClient) { }

  public getJoke(): Observable<any> {
    return this.http.get(this.URL).pipe(
      retry(3),
      tap(() => console.log('Get eseguito'))
    )
  }


  addToLiked(joke: any): Observable<SaveJoke[]> {

    const ToAdd: SaveJoke = {
      id: "",
      domanda: joke.setup,
      risposta: joke.delivery,
      status: "liked"
    };

    return this.http.post<SaveJoke[]>('http://localhost:3000/questions', ToAdd)
      .pipe(
        tap((data) => console.log(`Add Eseguito ${data}`)),
        retry(3),
        catchError(this.handleError)
      );

  }

  addToUnliked(joke: any): Observable<SaveJoke[]> {

    const ToAdd: SaveJoke = {
      id: "",
      domanda: joke.setup,
      risposta: joke.delivery,
      status: "dislike"
    };

    return this.http.post<SaveJoke[]>('http://localhost:3000/questions', ToAdd)
      .pipe(
        tap((data) => console.log(`Add Eseguito ${data}`)),
        retry(3),
        catchError(this.handleError)
      );

  }

  getAll(): Observable<SaveJoke[]> {
    return this.http.get<SaveJoke[]>('http://localhost:3000/questions')
      .pipe(
        tap((data) => console.log(`getAll Eseguito ${data}`)),
        retry(3)
      );
  }

  getLiked(): Observable<SaveJoke[]> {

    return this.http.get<SaveJoke[]>(`http://localhost:3000/questions`, { params: { status: 'liked' } })
      .pipe(
        tap((data) => console.log(`getLiked Eseguito ${data}`)),
        retry(3)
      );
  }

  getUnliked(): Observable<SaveJoke[]> {

    return this.http.get<SaveJoke[]>(`http://localhost:3000/questions`, { params: { status: 'dislike' } })
      .pipe(
        tap((data) => console.log(`getUnliked Eseguito ${data}`)),
        retry(3)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend return code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }










}
