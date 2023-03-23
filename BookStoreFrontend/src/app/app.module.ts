import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import {MatSelectModule} from '@angular/material/select';
import { Demo1Component } from './component/demo1/demo1.component';
import { Demo2Component } from './component/demo2/demo2.component';
import {MatCardModule} from '@angular/material/card';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { Quickview2Component } from './component/quickview2/quickview2.component';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    GetAllBooksComponent,
    Demo1Component,
    Demo2Component,
    QuickViewComponent,
    Quickview2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
