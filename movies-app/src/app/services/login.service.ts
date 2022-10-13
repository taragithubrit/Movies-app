import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 

  }

  login(form: any): Observable<string> {
    return this.http.post<{accessToken: string}>(environment.baseUrl + '/login', form)
    .pipe(
      map(r => r.accessToken)
    );
  }
}
