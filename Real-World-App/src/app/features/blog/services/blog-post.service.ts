import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogpost.mode'; 
import { AddBlogPost } from '../models/add-blogpost.model';
import { environment } from 'src/environments/environment';
import { UpdateBlogPost } from '../models/update-blogpost.mode';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http:HttpClient) { }

  // get Blogpost List Read
  getAllBlogPost():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogposts`);
  }

  // Add BlogPost Post 
  addBlogPost(blogPost:AddBlogPost):Observable<AddBlogPost>{
    return this.http.post<AddBlogPost>(`${environment.apiBaseUrl}/api/blogposts`, blogPost);
  }

  // Delete BlogPost
  deleteBlogPost(id:string):Observable<BlogPost>{
    return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
  }

  // getBlogPostgetById
  getBlogPostById(id:string): Observable<BlogPost>{
   return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
  }
  
  //UpDATE bLOGpOST
  updateBlogPost(id:string, UpDATEblogPosts:UpdateBlogPost):Observable<BlogPost>{
   return this.http.put<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`, UpDATEblogPosts);
  }


  deleteById(id:string):Observable<BlogPost>{
    return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
  }


}
