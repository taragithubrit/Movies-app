import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerachService {

  constructor(private http: HttpClient) { }

  search(title: string):Observable<any> {
    return this.http.get(environment.baseUrl + '/search', {
      params: {
        search: title
      },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
      }
    })
  }
}

