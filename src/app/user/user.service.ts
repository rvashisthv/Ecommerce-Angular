import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  addUser(fname: any, lname: any, email: any, password: any): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, {
      fname,
      lname,
      email,
      password,
    });
  }
}
