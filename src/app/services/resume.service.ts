import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ResumeData } from '../data-model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private _getUrl = "assets/dummy-data.json";

  constructor(private http: HttpClient) { }

  getResume(): Observable<ResumeData> {
    return this.http.get<ResumeData>(this._getUrl)
    .pipe(
      catchError(this.handleError('getResume', {}))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error("ResumeService", error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
