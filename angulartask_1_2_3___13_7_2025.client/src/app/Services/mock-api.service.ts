import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAPIService {

  constructor(private http: HttpClient) { }
  All_Categories(): Observable<any> {
    return this.http.get<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories');
  }
  All_Products(): Observable<any> {
    return this.http.get<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/products'); 
  }
  Post_To_AddNewUser(data: any): Observable<any>  {
    return this.http.post<any>('https://67d293ba90e0670699be2925.mockapi.io/user', data);
  }

  GetAllUsers_To_Login(): Observable<any>  {
    return this.http.get('https://67d293ba90e0670699be2925.mockapi.io/user');
  }
  Update_User(user: any): Observable<any> {
    return this.http.put(`https://67d293ba90e0670699be2925.mockapi.io/user/${user.id}`, user); // Update user by ID
  }
}
