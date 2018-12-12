import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductService } from './_services/product.service';
import { CategoryService } from './_services/category.service';
import { CategoryListComponent } from './category/category-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/auth.guard';
import { HttpInterceptorModule } from './security/http-interceptors';
import { HasClaimDirective } from './security/has-claim.directive';
import { SecurityService } from './_services/security.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoryListComponent,
    DashboardComponent,
    LoginComponent,
    HasClaimDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpInterceptorModule
  ],
  providers: [ProductService, CategoryService, SecurityService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
