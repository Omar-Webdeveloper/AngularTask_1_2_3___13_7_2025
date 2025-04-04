import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryAPIComponent } from './category-api/category-api.component';
import { ProductAPIComponent } from './product-api/product-api.component';
import { RegisterAPIComponent } from './register-api/register-api.component';
import { LoginAPIComponent } from './login-api/login-api.component';
import { GetcategoryComponent } from './Admin/getcategory/getcategory.component';
import { GetproductComponent } from './Admin/getproduct/getproduct.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ParnetComponent } from './parnet/parnet.component';
import { ChildComponent } from './child/child.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { Parnet1Component } from './parnet1/parnet1.component';
import { Child1Component } from './child1/child1.component';
import { Lesson1Component } from './ngOnInit/lesson1/lesson1.component';
import { Lesson2Component } from './ngOnDestroy/lesson2/lesson2.component';
import { InputdemoComponent } from './inputdemo/inputdemo.component';
import { OutputdemoComponent } from './outputdemo/outputdemo.component';
import { InputchildComponent } from './inputchild/inputchild.component';
import { OutputchildComponent } from './outputchild/outputchild.component';
import { TaskLoginComponent } from './task-login/task-login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoryComponent,
    ProductComponent,
    SignInComponent,
    SignUpComponent,
    CategoryAPIComponent,
    ProductAPIComponent,
    RegisterAPIComponent,
    LoginAPIComponent,
    GetcategoryComponent,
    GetproductComponent,
    AddcategoryComponent,
    AddproductComponent,
    DashboardComponent,
    ParnetComponent,
    ChildComponent,
    EditcategoryComponent,
    EditproductComponent,
    Parnet1Component,
    Child1Component,
    Lesson1Component,
    Lesson2Component,
    InputdemoComponent,
    OutputdemoComponent,
    InputchildComponent,
    OutputchildComponent,
    TaskLoginComponent,
    ProfileComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
