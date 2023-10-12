import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/products/products-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './stars/convert-tospaces.pipe';
import { StarComponent } from './stars/star.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProductDetailComponent } from './components/products/product-details/product-detail.component';
import { WelcomeComponent } from './components/home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { LoginComponent } from './components/login/login.component';
import { ProductsMoreComponent } from './components/products/products-more/products-more.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    LoginComponent,
    ProductsMoreComponent,

    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent},
      
      
      {path: 'more', children: [
        {path: 'products/more/:id', component: ProductsMoreComponent}
      ]},

      
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
