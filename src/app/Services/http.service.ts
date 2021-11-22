import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, publish, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  private REST_API_SERVER = 'http://localhost:8000';
 
  constructor(private httpclient: HttpClient) {}

  login(data: any){
    const url = `${this.REST_API_SERVER}/api/login`;
    return this.httpclient
    .post<any>(url, data)
    .pipe(catchError(this.handleError));
  }

  register(data: any){
    const url = `${this.REST_API_SERVER}/api/register`;
    return this.httpclient
    .post<any>(url, data)
    .pipe(catchError(this.handleError));
  }

  getdata(tieude: any, noidung: any) {
    const url = `${this.REST_API_SERVER}/api/search?tieude=`+tieude+`&noidung=`+noidung;
    return this.httpclient
    .get<any>(url)
    .pipe(catchError(this.handleError));
  }

  getNewid(Newid: number){
    const url = `${this.REST_API_SERVER}/api/search/`+Newid;
    return this.httpclient
    .get<any>(url)
    .pipe(catchError(this.handleError));
  }

  addNew(data: any) {
    const url = `${this.REST_API_SERVER}/api/update`;
    return this.httpclient
    .post<any>(url, data)
    .pipe(catchError(this.handleError));
  }

  repairNew(data: any) {
    const url = `${this.REST_API_SERVER}/api/update`;
    return this.httpclient
    .put<any>(url, data)
    .pipe(catchError(this.handleError));
  }

  delNew(Newid: number) {
    const url = `${this.REST_API_SERVER}/api/delete/`+Newid;
    return this.httpclient
    .delete<any>(url)
    .pipe(catchError(this.handleError));
  }
  
      private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
