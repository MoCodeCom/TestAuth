import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ProductsComponent } from './products/products/products.component';
import { AuthComponent } from './auth/auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './report/report.component'
import { AuthInterceptorService } from './services/interceptor.service';
import { interceptorLogin } from './services/interceptorLogin.service';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from 'src/environments/evironment';
import { LoadingComponent } from './loading/loading/loading.component';
import { AuthGuard } from './services/authGuard';

const appRoute:Routes = [
  /*
  {path:'', 
  canActivate:[AuthGuard],
  component:AuthComponent},
  */
  /*
  {path:'',
  //canActivate:[AuthGuard],
  component:AuthComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'report', component:ReportComponent}
  ]
  },*/
  {path:'home', component:HomeComponent},
  {path:'', component:AuthComponent},
  {path:'report', component:ReportComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AuthComponent,
    ReportComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  //the object behind brackets implementing interceptor pattern  
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:interceptorLogin, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
