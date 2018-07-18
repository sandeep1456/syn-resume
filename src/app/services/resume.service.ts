import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ResumeData } from '../data-model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private _getUrl = "assets/dummy-data.json";

  constructor(private http: HttpClient) { }

  getResume(empId): Observable<ResumeData> {

    let data:ResumeData;
    if(empId == '1456' && !localStorage.getItem(""+empId)) {
      let url = this._getUrl + `?empId=${empId}`;
      return this.http.get<ResumeData>(url)
      .pipe(
        tap(data => {
          console.log("Fetched", data);
          localStorage.setItem(""+data.empId, JSON.stringify(data));
        })
      //   catchError(this.handleError('getResume', {}))
      );
    } else {
      if(localStorage.getItem(""+empId)) {
        data = JSON.parse(localStorage.getItem(""+empId));
      }
      return new Observable<ResumeData>( observer => {
        observer.next(data);
        observer.complete();
      });
    }
  }

  saveResume(data: ResumeData) {
    localStorage.setItem(""+data.empId, JSON.stringify(data));
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
