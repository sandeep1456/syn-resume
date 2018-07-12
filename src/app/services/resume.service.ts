import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResumeData } from '../data-model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private _getUrl = "assets/dummy-data.json";

  constructor(private http: HttpClient) { }

  getResume(empId): Observable<ResumeData> {
    let url = this._getUrl + `?empId=${empId}`;
    return this.http.get<ResumeData>(url);
    // .pipe(
    //   catchError(this.handleError('getResume', {}))
    // );
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
