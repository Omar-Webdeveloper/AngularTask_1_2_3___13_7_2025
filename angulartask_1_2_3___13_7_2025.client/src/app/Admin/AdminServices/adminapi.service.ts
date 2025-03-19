import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http: HttpClient) { }

  All_Categories(): Observable<any> {
    return this.http.get<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories');
  }
  All_Products(): Observable<any> {
    return this.http.get<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/products');
  }
  Add_Categories(data:any): Observable<any> {
    return this.http.post<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories',data);
  }
  Add_Products(data:any): Observable<any> {
    return this.http.post<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/products', data);
  }

}
