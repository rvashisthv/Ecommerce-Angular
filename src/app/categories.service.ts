import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categories } from './categories/categories.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAllCat(): Observable<categories[]> {
    return this.http.get<categories[]>(`${environment.apiUrl}/categories`);
  }
}
