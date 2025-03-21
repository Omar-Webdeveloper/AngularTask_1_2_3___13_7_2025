import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CategoryAPIComponent } from './category-api/category-api.component';
import { ProductAPIComponent } from './product-api/product-api.component';
import { LoginAPIComponent } from './login-api/login-api.component';
import { RegisterAPIComponent } from './register-api/register-api.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { GetcategoryComponent } from './Admin/getcategory/getcategory.component';
import { GetproductComponent } from './Admin/getproduct/getproduct.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { ParnetComponent } from './parnet/parnet.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { InputdemoComponent } from './inputdemo/inputdemo.component';
import { OutputdemoComponent } from './outputdemo/outputdemo.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskLoginComponent } from './task-login/task-login.component';
//Test ngOnInit
//import { Lesson1Component } from './ngOnInit/lesson1/lesson1.component';
//import { ParnetComponent } from './ngOnInit/parnet/parnet.component';
//Test ngOnDestroy
//import { Lesson2Component } from './ngOnDestroy/lesson2/lesson2.component';
//import { ParnetComponent } from './ngOnDestroy/parnet/parnet.component';

const routes: Routes = [
  //-------------------------- Task 1 --------------------------
  { path: 'sign_up', component: SignUpComponent },
  { path: 'sign_in', component: SignInComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  //-------------------------- Task 2 --------------------------
  { path: 'All_Categories', component: CategoryAPIComponent },
  { path: "CategoryProducts/:id", component: ProductAPIComponent },
  //-------------------------- Task 3 --------------------------
  { path: 'Login_API', component: LoginAPIComponent },
  { path: 'Register_API', component: RegisterAPIComponent },
  //-------------------------- test --------------------------
  { path: 'Show_me', component: ParnetComponent },
  { path: 'input', component: InputdemoComponent },
  { path: 'output', component: OutputdemoComponent },
  { path: 'Task_5', component:TaskLoginComponent },
  { path: 'Profile', component: ProfileComponent },
  //{
  //  path: 'ngOnInit', component: Lesson1Component, children:
  //    [
  //      { path: 'demo1', component: ParnetComponent }
  //    ]
  //},
  //{
  //  path: 'ngOnDestroy', component: Lesson2Component, children:
  //    [
  //      { path: 'demo2', component: ParnetComponent }
  //    ]
  //},
  //-------------------------- Task 4 --------------------------
  {
    path: 'Admin_Dashboard', component: DashboardComponent, children:
      [
        { path: 'get_category', component: GetcategoryComponent },
        { path: 'get_product', component: GetproductComponent },
        { path: 'add_category', component: AddcategoryComponent },
        { path: 'add_product', component: AddproductComponent },
        { path: 'Edit_category/:id', component: EditcategoryComponent },
        { path: 'Edit_product/:id', component: EditproductComponent }
    ]
  }

  //-------------------------- Task 5 --------------------------
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
