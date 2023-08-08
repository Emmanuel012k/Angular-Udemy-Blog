import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './features/blog/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/blog/add-blogpost/add-blogpost.component';
import { EditBlogpostComponent } from './features/blog/edit-blogpost/edit-blogpost.component';

const routes: Routes = [
  // Category Rotues
  {path:"admin/categories", component:CategoryListComponent},
  {path:"admin/categories/add", component:AddCategoryComponent},
  {path:"admin/categories/:id", component:EditCategoryComponent},

  //BlogPost Routes
  {path:"admin/blogposts", component:BlogpostListComponent},
  {path:"admin/addblogposts", component:AddBlogpostComponent},
  {path:"admin/blogposts/:id", component:EditBlogpostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
