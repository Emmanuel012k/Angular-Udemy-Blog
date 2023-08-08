import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blogpost.mode';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit{
  id: string | null = null;
  blogPosts?: BlogPost[];
  
  constructor(private blogPostService:BlogPostService){}

  ngOnInit(): void {
     this.blogPostService.getAllBlogPost().subscribe({
      next:(response) => {
        this.blogPosts = response;
        console.log(response);
      },
     })
  }

  // onDelete(){
  //   if (this.id) {
  //     this.blogPostService.deleteBlogPost(this.id).subscribe({
  //         next:(res) => {
  //           console.log(res);
  //            alert('here');
  //         },
  //      })
  //    }    
  //  }

    onDelete(){
      alert('jf');
      if (this.id) {
        alert('ikff');
        this.blogPostService.deleteBlogPost(this.id).subscribe({
            next:(res) => {
              console.log(res);
            }
        })
      }
   }


}
