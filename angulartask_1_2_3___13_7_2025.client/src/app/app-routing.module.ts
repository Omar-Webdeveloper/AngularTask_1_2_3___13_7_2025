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
  { path: 'Register_API', component: RegisterAPIComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
