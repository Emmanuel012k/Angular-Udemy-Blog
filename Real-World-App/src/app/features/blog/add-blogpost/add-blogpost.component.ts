import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blogpost.mode';
import { BlogPostService } from '../services/blog-post.service';
import { Category } from '../../category/models/category.model';
import { Observable } from 'rxjs';
import { AddBlogPost } from '../models/add-blogpost.model';
import { CategoryService } from '../../category/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit{
  model:AddBlogPost;
  categories$?: Observable<Category[]>
  
  constructor(private httpBlogService:BlogPostService,
     private catgeory:CategoryService,
     private router:Router
     ){
     this.model = {
      title:'',
      shortDescription:'',
      urlHandle:'',
      content:'',
      featuredImageUrl:'',
      author:'',
      isVisible:true,
      publishedDate:new Date(),
      categories:[],
     }
  }
  ngOnInit(): void {
   this.categories$ = this.catgeory.getAllCategories()
  }

  onFormSubmit(){    
   this.httpBlogService.addBlogPost(this.model).subscribe({
    next:(value) => {
      console.log(value);
      alert("here");
    this.router.navigateByUrl('/admin/blogposts');
    },
   })
  }

  


}
