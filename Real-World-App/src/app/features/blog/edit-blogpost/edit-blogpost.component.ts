import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blogpost.mode';
import { BlogPostService } from '../services/blog-post.service';
import { Category } from '../../category/models/category.model';
import { CategoryService } from '../../category/services/category.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UpdateBlogPost } from '../models/update-blogpost.mode';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.css']
})
export class EditBlogpostComponent implements OnInit{
   model?:BlogPost;
   id:string | null = null;
   categories$? : Observable<Category[]>;
   selectedCategories? : string[];

   constructor(
    private blogPostService:BlogPostService,
     private categoryService:CategoryService,
     private routeParam:Router,
     private route:ActivatedRoute
     ){}
  
  ngOnInit(): void {
    this.categoryService.getAllCategories();
    this.route.paramMap.subscribe({
       next:(param) => {
          this.id = param.get('id');
          console.log(this.id);
          console.log(this.model)
         
           // Get BlogPost FROM API
       if(this.id){
         this.blogPostService.getBlogPostById(this.id).subscribe({
          next:(res) => {
            this.model = res;
            this.selectedCategories = res.categories.map(x => x.id)
          },
         });

       }    
       },
    })
     
  }

  onFormSubmit(){
       if(this.model && this.id){
      var updateBlogPost: UpdateBlogPost = {        
         author: this.model.author,
         content: this.model.content,
         shortDescription: this.model.shortDescription,
         featuredImageUrl: this.model.featuredImageUrl,
         isVisible: this.model.isVisible,
         publishedDate: this.model.publishedDate,
         urlHandle: this.model.urlHandle,
         title: this.model.title,
         categories: this.selectedCategories ?? []
      };
      this.blogPostService.updateBlogPost(this.id, updateBlogPost).subscribe({
        next:(respo) => {
          console.log(respo)
          this.routeParam.navigateByUrl('/admin/blogposts')
        },
      })
  }
}


  
  onDelete(){  
    if (this.id) {
      this.blogPostService.deleteById(this.id).subscribe({
        next:(respo) => {
          this.routeParam.navigateByUrl('/admin/blogposts')
        },
      })
    }
  
  }

}