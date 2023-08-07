import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { AddCaytegory } from '../models/add-category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  model:AddCaytegory

  constructor(private http:CategoryService, private _router:Router){
    this.model={
        name:'',
      urlHandle:''
    }
  }
  
  
  // Submit Method //
  onFormSubmit(){
    this.http.addCategory(this.model).subscribe({
    next:(res) => {
      console.log(res);
      this._router.navigateByUrl("admin/categories");
    },
    })
  }

}
