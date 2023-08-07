import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { UpdateCategory } from '../models/update-category.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{
   id: string | null = null;
   modelCategory?:Category;

  constructor(private http:CategoryService,
    private route:ActivatedRoute,
    private _router:Router){}

  ngOnInit(): void {
     this.route.paramMap.subscribe({
      next:(params) => {
        this.id = params.get('id');

        // get the data from API for this catgeory Id //
        if (this.id) {
          this.http.getCategoryById(this.id).subscribe({
            next:(response) => {
              this.modelCategory = response;
              console.log(response)
            },
          })
        }
      },
     })
  }


  
   onFormSubmit(){
    const updateCategoryRequest: UpdateCategory = {
      name: this.modelCategory?.name ?? '',
      urlHandle: this.modelCategory?.urlHandle ?? ''
    };

    // Pass this object to service
    if(this.id){
  this.http.updateCategory(this.id, updateCategoryRequest)
    .subscribe({
      next:(res) => { 
         this._router.navigateByUrl('/admin/categories');
      },
    });  
   }   
   
   }

   

   onDelete(){
      if (this.id) {
        this.http.deleteCategory(this.id).subscribe({
          next:(Delete) => {
            this._router.navigateByUrl('/admin/categories')
          },
        })
      }
   }
  

}
