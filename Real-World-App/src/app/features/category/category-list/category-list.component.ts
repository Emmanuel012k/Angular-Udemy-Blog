import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
 

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
   categoryList?:Category[];
   constructor(private categoryService: CategoryService){}




  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next:(response) => {
        console.log(response);
        this.categoryList = response;
        console.log(this.categoryList)
      },
    })
  }


}
