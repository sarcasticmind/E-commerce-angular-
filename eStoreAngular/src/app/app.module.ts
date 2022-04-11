import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/add-products/products.component';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/Home/add-product.component';
import { NacbarComponent } from './components/navbar/nacbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UploadComponent } from './components/upload/upload.component';
import { CounterService } from './services/counter.service';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { JsonStringPipe } from './Pipes/jsonString.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './services/user.service';




const routes : Routes =[

  {path:'addProduct' , component:ProductsComponent},
  {path:'home' , component:AddProductComponent},
  { path:'details/:id' , component : DetailsComponent},
  { path:'about' , component : AboutComponent},
  { path:'' , component : LoginComponent},
  { path:'register' , component : RegisterComponent},
  { path:'**' , component : ErrorComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    NacbarComponent,
    ProductListComponent,
    UploadComponent,
    FooterComponent,
    SliderComponent,
    DetailsComponent,
    AboutComponent,
    ErrorComponent,
    JsonStringPipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    RxReactiveFormsModule,
  ],
  providers: [
    ProductService,
    CounterService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
