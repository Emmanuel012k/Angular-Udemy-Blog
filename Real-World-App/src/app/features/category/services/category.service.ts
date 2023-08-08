import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
import { HttpClient } from '@angular/common/http';
 
import { Category } from '../models/category.model';
import { AddCaytegory } from '../models/add-category.model';
import { UpdateCategory } from '../models/update-category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private _httpCategory: HttpClient) { }

  // get CATEGORIES
  getAllCategories(): Observable<Category[]>{
    return this._httpCategory.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`);
  }

  //Add Category
  addCategory(model:AddCaytegory): Observable<void>{
    return this._httpCategory.post<void>(`${environment.apiBaseUrl}/api/Categories`,model);
  }

  // get by Catgeory Id
  getCategoryById(id: string): Observable<Category>{
   return this._httpCategory.get<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }
  
  //update BY ID
  updateCategory(id:string, updateCategory:UpdateCategory):Observable<Category>{
     return this._httpCategory.put<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`, updateCategory);
  }

  // Delete Category //
  deleteCategory(id:string):Observable<Category>{
    return this._httpCategory.delete<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }
  
}
